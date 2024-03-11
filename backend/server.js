const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// Handle GET requests to the root path
app.get('/', (req, res) => {
    res.send('Welcome to the WordPress Deployment Server. Use the API endpoints to deploy WordPress architectures.');
});

// Handle POST requests for deployment
app.post('/deploy', (req, res) => {
    const { deploymentType } = req.body; // e.g., "monolith", "lightsail", "microservices"
    let terraformDir = '';

    switch (deploymentType) {
        case 'monolith':
            terraformDir = './terraform/wordpress-monolith';
            break;
        case 'lightsail':
            terraformDir = './terraform/wordpress-lightsail';
            break;
        case 'microservices':
            terraformDir = './terraform/wordpress-microservices';
            break;
        default:
            return res.status(400).send({ message: "Invalid deployment type" });
    }

    const terraformApplyCommand = `terraform -chdir=${terraformDir} apply -auto-approve`;

    exec(terraformApplyCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send({ message: "Deployment failed", error: stderr });
        }
        console.log(`stdout: ${stdout}`);
        const ipMatch = stdout.match(/public_ip = (.*)/); // Adjust regex based on your Terraform output
        if (ipMatch) {
            res.send({ message: "Deployment successful", ip: ipMatch[1] });
        } else {
            res.status(500).send({ message: "IP address not found" });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
