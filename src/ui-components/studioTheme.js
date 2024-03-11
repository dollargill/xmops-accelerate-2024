/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { createTheme } from "@aws-amplify/ui-react";
export default createTheme({
  name: "studioTheme",
  tokens: {
    components: {
      alert: {
        alignItems: { value: "center" },
        justifyContent: { value: "space-between" },
        color: { value: "{colors.font.primary.value}" },
        backgroundColor: { value: "{colors.background.tertiary.value}" },
        paddingBlock: { value: "{space.small.value}" },
        paddingInline: { value: "{space.medium.value}" },
        icon: { size: { value: "{fontSizes.xl.value}" } },
        heading: {
          fontSize: { value: "{fontSizes.medium.value}" },
          fontWeight: { value: "{fontWeights.bold.value}" },
        },
        info: {
          color: { value: "{colors.font.info.value}" },
          backgroundColor: { value: "{colors.background.info.value}" },
        },
        error: {
          color: { value: "{colors.font.error.value}" },
          backgroundColor: { value: "{colors.background.error.value}" },
        },
        warning: {
          color: { value: "{colors.font.warning.value}" },
          backgroundColor: { value: "{colors.background.warning.value}" },
        },
        success: {
          color: { value: "{colors.font.success.value}" },
          backgroundColor: { value: "{colors.background.success.value}" },
        },
      },
      authenticator: {
        maxWidth: { value: "60rem" },
        modal: {
          width: { value: "{space.relative.full}" },
          height: { value: "{space.relative.full}" },
          backgroundColor: { value: "{colors.overlay.50.value}" },
          top: { value: "{space.zero}" },
          left: { value: "{space.zero}" },
        },
        container: { widthMax: { value: "30rem" } },
        router: {
          borderWidth: { value: "{borderWidths.small.value}" },
          borderStyle: { value: "solid" },
          borderColor: { value: "{colors.border.primary.value}" },
          backgroundColor: { value: "{colors.background.primary.value}" },
          boxShadow: { value: "{shadows.medium.value}" },
        },
        footer: { paddingBottom: { value: "{space.medium.value}" } },
        form: { padding: { value: "{space.xl.value}" } },
        state: {
          inactive: {
            backgroundColor: { value: "{colors.background.secondary.value}" },
          },
        },
        orContainer: {
          color: { value: "{colors.neutral.80.value}" },
          orLine: {
            backgroundColor: { value: "{colors.background.primary.value}" },
          },
        },
      },
      autocomplete: {
        menu: {
          width: { value: "100%" },
          marginBlockStart: { value: "{space.xxxs}" },
          backgroundColor: { value: "{colors.background.primary}" },
          borderColor: { value: "{colors.border.primary}" },
          borderWidth: { value: "{borderWidths.small}" },
          borderStyle: { value: "solid" },
          borderRadius: { value: "{radii.small}" },
          options: {
            display: { value: "flex" },
            flexDirection: { value: "column" },
            maxHeight: { value: "300px" },
          },
          option: {
            backgroundColor: { value: "{colors.background.primary}" },
            color: { value: "currentcolor" },
            cursor: { value: "pointer" },
            transitionDuration: { value: "{time.short}" },
            transitionProperty: { value: "background-color, color" },
            transitionTimingFunction: { value: "ease" },
            _active: {
              backgroundColor: { value: "{colors.brand.primary.80}" },
              color: { value: "{colors.white}" },
            },
          },
          _empty: { display: { value: "flex" } },
          _loading: {
            alignItems: { value: "center" },
            display: { value: "flex" },
            gap: { value: "{space.xxxs}" },
          },
          spaceShared: {
            paddingBlock: { value: "{space.xs}" },
            paddingInline: { value: "{space.small}" },
          },
        },
      },
      badge: {
        color: { value: "{colors.font.primary.value}" },
        lineHeight: { value: "1" },
        fontWeight: { value: "{fontWeights.semibold.value}" },
        fontSize: { value: "{fontSizes.small.value}" },
        textAlign: { value: "center" },
        paddingVertical: { value: "{space.xs.value}" },
        paddingHorizontal: { value: "{space.small.value}" },
        backgroundColor: { value: "{colors.background.tertiary.value}" },
        borderRadius: { value: "{radii.xl.value}" },
        info: {
          color: { value: "{colors.font.info.value}" },
          backgroundColor: { value: "{colors.background.info.value}" },
        },
        warning: {
          color: { value: "{colors.font.warning.value}" },
          backgroundColor: { value: "{colors.background.warning.value}" },
        },
        success: {
          color: { value: "{colors.font.success.value}" },
          backgroundColor: { value: "{colors.background.success.value}" },
        },
        error: {
          color: { value: "{colors.font.error.value}" },
          backgroundColor: { value: "{colors.background.error.value}" },
        },
        small: {
          fontSize: { value: "{fontSizes.xs.value}" },
          paddingVertical: { value: "{space.xxs.value}" },
          paddingHorizontal: { value: "{space.xs.value}" },
        },
        large: {
          fontSize: { value: "{fontSizes.medium.value}" },
          paddingVertical: { value: "{space.small.value}" },
          paddingHorizontal: { value: "{space.medium.value}" },
        },
      },
      breadcrumbs: {
        flexDirection: { value: "row" },
        flexWrap: { value: "wrap" },
        gap: { value: "0" },
        color: { value: "{colors.font.tertiary}" },
        item: {
          flexDirection: { value: "row" },
          color: { value: "inherit" },
          fontSize: { value: "inherit" },
          alignItems: { value: "center" },
          lineHeight: { value: "1" },
        },
        separator: {
          color: { value: "inherit" },
          fontSize: { value: "inherit" },
          paddingInline: { value: "{space.xxs}" },
        },
        link: {
          color: { value: "{components.link.color}" },
          fontSize: { value: "inherit" },
          fontWeight: { value: "normal" },
          textDecoration: { value: "none" },
          paddingInline: { value: "{space.xs}" },
          paddingBlock: { value: "{space.xxs}" },
          current: {
            color: { value: "inherit" },
            fontSize: { value: "inherit" },
            fontWeight: { value: "normal" },
            textDecoration: { value: "none" },
          },
        },
      },
      button: {
        fontWeight: { value: "{fontWeights.bold.value}" },
        transitionDuration: {
          value: "{components.fieldcontrol.transitionDuration.value}",
        },
        fontSize: { value: "{components.fieldcontrol.fontSize.value}" },
        lineHeight: { value: "{components.fieldcontrol.lineHeight.value}" },
        paddingBlockStart: {
          value: "{components.fieldcontrol.paddingBlockStart.value}",
        },
        paddingBlockEnd: {
          value: "{components.fieldcontrol.paddingBlockEnd.value}",
        },
        paddingInlineStart: {
          value: "{components.fieldcontrol.paddingInlineStart.value}",
        },
        paddingInlineEnd: {
          value: "{components.fieldcontrol.paddingInlineEnd.value}",
        },
        backgroundColor: { value: "transparent" },
        borderColor: { value: "{components.fieldcontrol.borderColor.value}" },
        borderWidth: { value: "{components.fieldcontrol.borderWidth.value}" },
        borderStyle: { value: "{components.fieldcontrol.borderStyle.value}" },
        borderRadius: { value: "{components.fieldcontrol.borderRadius.value}" },
        color: { value: "{colors.font.primary.value}" },
        _hover: {
          color: { value: "{colors.font.focus.value}" },
          backgroundColor: { value: "{colors.brand.primary.10.value}" },
          borderColor: { value: "{colors.brand.primary.60.value}" },
        },
        _focus: {
          color: { value: "{colors.font.focus.value}" },
          backgroundColor: { value: "{colors.brand.primary.10.value}" },
          borderColor: { value: "{colors.border.focus.value}" },
          boxShadow: {
            value: "{components.fieldcontrol._focus.boxShadow.value}",
          },
        },
        _active: {
          color: { value: "{colors.font.active.value}" },
          backgroundColor: { value: "{colors.brand.primary.20.value}" },
          borderColor: { value: "{colors.brand.primary.100.value}" },
        },
        _loading: {
          color: { value: "{colors.font.disabled.value}" },
          backgroundColor: { value: "transparent" },
          borderColor: { value: "{colors.border.tertiary.value}" },
        },
        _disabled: {
          color: { value: "{colors.font.disabled.value}" },
          backgroundColor: { value: "transparent" },
          borderColor: { value: "{colors.border.tertiary.value}" },
        },
        outlined: {
          info: {
            borderColor: { value: "{colors.blue.60.value}" },
            backgroundColor: { value: "transparent" },
            color: { value: "{colors.blue.100}" },
            _hover: {
              borderColor: { value: "{colors.blue.60.value}" },
              backgroundColor: { value: "{colors.blue.10.value}" },
              color: { value: "{colors.blue.100.value}" },
            },
            _focus: {
              borderColor: { value: "{colors.blue.100.value}" },
              backgroundColor: { value: "{colors.blue.10.value}" },
              color: { value: "{colors.blue.100.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.blue.100.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "{colors.blue.100.value}" },
              backgroundColor: { value: "{colors.blue.20.value}" },
              color: { value: "{colors.blue.100.value}" },
            },
          },
          warning: {
            borderColor: { value: "{colors.orange.60.value}" },
            backgroundColor: { value: "transparent" },
            color: { value: "{colors.orange.100}" },
            _hover: {
              borderColor: { value: "{colors.orange.60.value}" },
              backgroundColor: { value: "{colors.orange.10.value}" },
              color: { value: "{colors.orange.100.value}" },
            },
            _focus: {
              borderColor: { value: "{colors.orange.100.value}" },
              backgroundColor: { value: "{colors.orange.10.value}" },
              color: { value: "{colors.orange.100.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.orange.100.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "{colors.orange.100.value}" },
              backgroundColor: { value: "{colors.orange.20.value}" },
              color: { value: "{colors.orange.100.value}" },
            },
          },
          success: {
            borderColor: { value: "{colors.green.60.value}" },
            backgroundColor: { value: "transparent" },
            color: { value: "{colors.green.100}" },
            _hover: {
              borderColor: { value: "{colors.green.60.value}" },
              backgroundColor: { value: "{colors.green.10.value}" },
              color: { value: "{colors.green.100.value}" },
            },
            _focus: {
              borderColor: { value: "{colors.green.100.value}" },
              backgroundColor: { value: "{colors.green.10.value}" },
              color: { value: "{colors.green.100.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.green.100.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "{colors.green.100.value}" },
              backgroundColor: { value: "{colors.green.20.value}" },
              color: { value: "{colors.green.100.value}" },
            },
          },
          error: {
            borderColor: { value: "{colors.red.60.value}" },
            backgroundColor: { value: "transparent" },
            color: { value: "{colors.red.100}" },
            _hover: {
              borderColor: { value: "{colors.red.60.value}" },
              backgroundColor: { value: "{colors.red.10.value}" },
              color: { value: "{colors.red.100.value}" },
            },
            _focus: {
              borderColor: { value: "{colors.red.100.value}" },
              backgroundColor: { value: "{colors.red.10.value}" },
              color: { value: "{colors.red.100.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.red.100.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "{colors.red.100.value}" },
              backgroundColor: { value: "{colors.red.20.value}" },
              color: { value: "{colors.red.100.value}" },
            },
          },
          overlay: {
            borderColor: { value: "{colors.overlay.60.value}" },
            backgroundColor: { value: "transparent" },
            color: { value: "{colors.font.primary.value}" },
            _hover: {
              borderColor: { value: "{colors.overlay.60.value}" },
              backgroundColor: { value: "{colors.overlay.5.value}" },
              color: { value: "{colors.neutral.90.value}" },
            },
            _focus: {
              borderColor: { value: "{colors.overlay.90.value}" },
              backgroundColor: { value: "{colors.overlay.5.value}" },
              color: { value: "{colors.neutral.90.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.overlay.90.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "{colors.overlay.90.value}" },
              backgroundColor: { value: "{colors.overlay.10.value}" },
              color: { value: "{colors.neutral.100.value}" },
            },
          },
        },
        primary: {
          borderColor: { value: "transparent" },
          borderWidth: { value: "{borderWidths.small.value}" },
          borderStyle: { value: "solid" },
          backgroundColor: { value: "{colors.brand.primary.80.value}" },
          color: { value: "{colors.font.inverse.value}" },
          _disabled: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.background.disabled.value}" },
            color: { value: "{colors.font.disabled.value}" },
          },
          _loading: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.background.disabled.value}" },
            color: { value: "{colors.font.disabled.value}" },
          },
          _hover: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.brand.primary.90.value}" },
            color: { value: "{colors.font.inverse.value}" },
          },
          _focus: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.brand.primary.90.value}" },
            color: { value: "{colors.font.inverse.value}" },
            boxShadow: {
              value: "{components.fieldcontrol._focus.boxShadow.value}",
            },
          },
          _active: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.brand.primary.100.value}" },
            color: { value: "{colors.font.inverse.value}" },
          },
          info: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.blue.80}" },
            color: { value: "{colors.font.inverse.value}" },
            _hover: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.blue.90.value}" },
              color: { value: "{colors.font.inverse.value}" },
            },
            _focus: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.blue.90.value}" },
              color: { value: "{colors.font.inverse.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.blue.100.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.blue.100.value}" },
              color: { value: "{colors.font.inverse.value}" },
            },
          },
          warning: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.orange.80}" },
            color: { value: "{colors.font.inverse.value}" },
            _hover: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.orange.90.value}" },
              color: { value: "{colors.font.inverse.value}" },
            },
            _focus: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.orange.90.value}" },
              color: { value: "{colors.font.inverse.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.orange.100.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.orange.100.value}" },
              color: { value: "{colors.font.inverse.value}" },
            },
          },
          error: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.red.80}" },
            color: { value: "{colors.font.inverse.value}" },
            _hover: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.red.90.value}" },
              color: { value: "{colors.font.inverse.value}" },
            },
            _focus: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.red.90.value}" },
              color: { value: "{colors.font.inverse.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.red.100.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.red.100.value}" },
              color: { value: "{colors.font.inverse.value}" },
            },
          },
          success: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.green.80}" },
            color: { value: "{colors.font.inverse.value}" },
            _hover: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.green.90.value}" },
              color: { value: "{colors.font.inverse.value}" },
            },
            _focus: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.green.90.value}" },
              color: { value: "{colors.font.inverse.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.green.100.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.green.100.value}" },
              color: { value: "{colors.font.inverse.value}" },
            },
          },
          overlay: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.overlay.70}" },
            color: { value: "{colors.font.inverse.value}" },
            _hover: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.overlay.90.value}" },
              color: { value: "{colors.font.inverse.value}" },
            },
            _focus: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.overlay.90.value}" },
              color: { value: "{colors.font.inverse.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.overlay.90.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.overlay.90.value}" },
              color: { value: "{colors.font.inverse.value}" },
            },
          },
        },
        menu: {
          borderWidth: { value: "{space.zero.value}" },
          backgroundColor: { value: "transparent" },
          justifyContent: { value: "start" },
          _hover: {
            color: { value: "{colors.font.inverse.value}" },
            backgroundColor: { value: "{colors.brand.primary.80.value}" },
          },
          _focus: {
            color: { value: "{colors.font.inverse.value}" },
            backgroundColor: { value: "{colors.brand.primary.80.value}" },
          },
          _active: {
            color: { value: "{colors.font.inverse.value}" },
            backgroundColor: { value: "{colors.brand.primary.90.value}" },
          },
          _disabled: { color: { value: "{colors.font.disabled.value}" } },
        },
        link: {
          backgroundColor: { value: "transparent" },
          borderColor: { value: "transparent" },
          borderWidth: { value: "{borderWidths.small.value}" },
          color: { value: "{colors.font.interactive.value}" },
          _hover: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.brand.primary.10.value}" },
            color: { value: "{colors.font.hover.value}" },
          },
          _focus: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.brand.primary.10.value}" },
            color: { value: "{colors.font.focus.value}" },
            boxShadow: {
              value: "{components.fieldcontrol._focus.boxShadow.value}",
            },
          },
          _active: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.brand.primary.20.value}" },
            color: { value: "{colors.font.active.value}" },
          },
          _disabled: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "transparent" },
            color: { value: "{colors.font.disabled.value}" },
          },
          _loading: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "transparent" },
            color: { value: "{colors.font.disabled.value}" },
          },
          info: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "transparent" },
            color: { value: "{colors.blue.100}" },
            _hover: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.blue.10.value}" },
              color: { value: "{colors.blue.90.value}" },
            },
            _focus: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.blue.10.value}" },
              color: { value: "{colors.blue.100.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.blue.100.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.blue.20.value}" },
              color: { value: "{colors.blue.100.value}" },
            },
          },
          warning: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "transparent" },
            color: { value: "{colors.orange.100}" },
            _hover: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.orange.10.value}" },
              color: { value: "{colors.orange.90.value}" },
            },
            _focus: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.orange.10.value}" },
              color: { value: "{colors.orange.100.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.orange.100.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.orange.20.value}" },
              color: { value: "{colors.orange.100.value}" },
            },
          },
          success: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "transparent" },
            color: { value: "{colors.green.100}" },
            _hover: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.green.10.value}" },
              color: { value: "{colors.green.90.value}" },
            },
            _focus: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.green.10.value}" },
              color: { value: "{colors.green.100.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.green.100.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.green.20.value}" },
              color: { value: "{colors.green.100.value}" },
            },
          },
          error: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "transparent" },
            color: { value: "{colors.red.100}" },
            _hover: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.red.10.value}" },
              color: { value: "{colors.red.90.value}" },
            },
            _focus: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.red.10.value}" },
              color: { value: "{colors.red.100.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.red.100.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.red.20.value}" },
              color: { value: "{colors.red.100.value}" },
            },
          },
          overlay: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "transparent" },
            color: { value: "{colors.neutral.100}" },
            _hover: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.overlay.5.value}" },
              color: { value: "{colors.overlay.80.value}" },
            },
            _focus: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.overlay.5.value}" },
              color: { value: "{colors.overlay.90.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "1px",
                  color: "{colors.overlay.90.value}",
                },
              },
            },
            _active: {
              borderColor: { value: "transparent" },
              backgroundColor: { value: "{colors.overlay.10.value}" },
              color: { value: "{colors.overlay.90.value}" },
            },
          },
        },
        warning: {
          backgroundColor: { value: "transparent" },
          borderColor: { value: "{colors.red.60}" },
          borderWidth: { value: "{borderWidths.small}" },
          color: { value: "{colors.red.60}" },
          _hover: {
            borderColor: { value: "{colors.red.80}" },
            backgroundColor: { value: "{colors.red.10}" },
            color: { value: "{colors.font.error}" },
          },
          _focus: {
            borderColor: { value: "{colors.red.80}" },
            backgroundColor: { value: "{colors.red.10}" },
            color: { value: "{colors.red.80}" },
            boxShadow: {
              value: "{components.fieldcontrol._error._focus.boxShadow}",
            },
          },
          _active: {
            borderColor: { value: "{colors.red.100}" },
            backgroundColor: { value: "{colors.red.20}" },
            color: { value: "{colors.red.100}" },
          },
          _disabled: {
            borderColor: { value: "{colors.border.tertiary}" },
            backgroundColor: { value: "transparent" },
            color: { value: "{colors.font.disabled}" },
          },
          _loading: {
            borderColor: { value: "{colors.border.tertiary}" },
            backgroundColor: { value: "transparent" },
            color: { value: "{colors.font.disabled}" },
          },
        },
        destructive: {
          borderColor: { value: "transparent" },
          borderWidth: { value: "{borderWidths.small}" },
          borderStyle: { value: "solid" },
          backgroundColor: { value: "{colors.red.60}" },
          color: { value: "{colors.font.inverse}" },
          _disabled: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.background.disabled}" },
            color: { value: "{colors.font.disabled}" },
          },
          _loading: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.background.disabled}" },
            color: { value: "{colors.font.disabled}" },
          },
          _hover: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.red.80}" },
            color: { value: "{colors.font.inverse}" },
          },
          _focus: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.red.80}" },
            color: { value: "{colors.font.inverse}" },
            boxShadow: {
              value: "{components.fieldcontrol._error._focus.boxShadow}",
            },
          },
          _active: {
            borderColor: { value: "transparent" },
            backgroundColor: { value: "{colors.red.100}" },
            color: { value: "{colors.font.inverse}" },
          },
        },
        small: {
          fontSize: { value: "{components.fieldcontrol.small.fontSize.value}" },
          paddingBlockStart: {
            value: "{components.fieldcontrol.small.paddingBlockStart.value}",
          },
          paddingBlockEnd: {
            value: "{components.fieldcontrol.small.paddingBlockEnd.value}",
          },
          paddingInlineStart: {
            value: "{components.fieldcontrol.small.paddingInlineStart.value}",
          },
          paddingInlineEnd: {
            value: "{components.fieldcontrol.small.paddingInlineEnd.value}",
          },
        },
        large: {
          fontSize: { value: "{components.fieldcontrol.large.fontSize.value}" },
          paddingBlockStart: {
            value: "{components.fieldcontrol.large.paddingBlockStart.value}",
          },
          paddingBlockEnd: {
            value: "{components.fieldcontrol.large.paddingBlockEnd.value}",
          },
          paddingInlineStart: {
            value: "{components.fieldcontrol.large.paddingInlineStart.value}",
          },
          paddingInlineEnd: {
            value: "{components.fieldcontrol.large.paddingInlineEnd.value}",
          },
        },
        loaderWrapper: {
          alignItems: { value: "center" },
          gap: { value: "{space.xs.value}" },
        },
      },
      card: {
        backgroundColor: { value: "{colors.background.primary.value}" },
        borderRadius: { value: "{radii.xs.value}" },
        borderWidth: { value: "0" },
        borderStyle: { value: "solid" },
        borderColor: { value: "transparent" },
        boxShadow: { value: "none" },
        padding: { value: "{space.medium.value}" },
        outlined: {
          backgroundColor: { value: "{components.card.backgroundColor.value}" },
          borderRadius: { value: "{radii.xs.value}" },
          borderWidth: { value: "{borderWidths.small.value}" },
          borderStyle: { value: "solid" },
          borderColor: { value: "{colors.border.primary.value}" },
          boxShadow: { value: "{components.card.boxShadow.value}" },
        },
        elevated: {
          backgroundColor: { value: "{components.card.backgroundColor.value}" },
          borderRadius: { value: "{radii.xs.value}" },
          borderWidth: { value: "0" },
          borderStyle: { value: "solid" },
          borderColor: { value: "transparent" },
          boxShadow: { value: "{shadows.medium.value}" },
        },
      },
      checkbox: {
        cursor: { value: "pointer" },
        alignItems: { value: "center" },
        _disabled: { cursor: { value: "not-allowed" } },
        button: {
          position: { value: "relative" },
          alignItems: { value: "center" },
          justifyContent: { value: "center" },
          color: { value: "{colors.font.inverse.value}" },
          before: {
            width: { value: "100%" },
            height: { value: "100%" },
            borderWidth: { value: "{borderWidths.medium.value}" },
            borderRadius: { value: "20%" },
            borderStyle: { value: "solid" },
            borderColor: { value: "{colors.border.primary.value}" },
          },
          _focus: {
            outlineColor: { value: "{colors.transparent.value}" },
            outlineStyle: { value: "solid" },
            outlineWidth: { value: "{outlineWidths.medium.value}" },
            outlineOffset: { value: "{outlineOffsets.medium.value}" },
            borderColor: { value: "{colors.transparent.value}" },
            boxShadow: {
              value: {
                offsetX: "0px",
                offsetY: "0px",
                blurRadius: "0px",
                spreadRadius: "2px",
                color: "{colors.border.focus.value}",
              },
            },
          },
          _disabled: {
            borderColor: { value: "{colors.border.disabled.value}" },
          },
          _error: {
            borderColor: { value: "{colors.border.error.value}" },
            _focus: {
              borderColor: { value: "{colors.transparent.value}" },
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "0px",
                  blurRadius: "0px",
                  spreadRadius: "2px",
                  color: "{colors.border.error.value}",
                },
              },
            },
          },
        },
        icon: {
          backgroundColor: { value: "{colors.brand.primary.80.value}" },
          borderRadius: { value: "20%" },
          opacity: { value: "{opacities.0.value}" },
          transform: { value: "scale(0)" },
          transitionProperty: { value: "all" },
          transitionDuration: { value: "{time.short.value}" },
          transitionTimingFunction: { value: "ease-in-out" },
          _checked: {
            opacity: { value: "{opacities.100.value}" },
            transform: { value: "scale(1)" },
            _disabled: {
              backgroundColor: { value: "{colors.background.disabled.value}" },
            },
          },
          _indeterminate: {
            opacity: { value: "{opacities.100.value}" },
            transform: { value: "scale(1)" },
            _disabled: {
              backgroundColor: { value: "{colors.background.disabled.value}" },
            },
          },
        },
        label: {
          _disabled: { color: { value: "{colors.font.disabled.value}" } },
        },
      },
      checkboxfield: {
        alignItems: { value: "flex-start" },
        alignContent: { value: "center" },
        flexDirection: { value: "column" },
        justifyContent: { value: "center" },
      },
      collection: {
        pagination: {
          current: {
            color: { value: "{components.pagination.current.color}" },
            backgroundColor: {
              value: "{components.pagination.current.backgroundColor}",
            },
          },
          button: {
            color: { value: "{components.pagination.button.color}" },
            _hover: {
              backgroundColor: {
                value: "{components.pagination.button.hover.backgroundColor}",
              },
              color: { value: "{components.pagination.button.hover.color}" },
            },
            _disabled: {
              color: { value: "{components.pagination.button.disabled.color}" },
            },
          },
        },
        search: {
          input: { color: { value: "{components.searchfield.color}" } },
          button: {
            color: { value: "{components.searchfield.button.color}" },
            _active: {
              backgroundColor: {
                value:
                  "{components.searchfield.button._active.backgroundColor}",
              },
              borderColor: {
                value: "{components.searchfield.button._active.borderColor}",
              },
              color: { value: "{components.searchfield.button._active.color}" },
            },
            _disabled: {
              backgroundColor: {
                value:
                  "{components.searchfield.button._disabled.backgroundColor}",
              },
              borderColor: {
                value: "{components.searchfield.button._disabled.borderColor}",
              },
              color: {
                value: "{components.searchfield.button._disabled.color}",
              },
            },
            _focus: {
              backgroundColor: {
                value: "{components.searchfield.button._focus.backgroundColor}",
              },
              borderColor: {
                value: "{components.searchfield.button._focus.borderColor}",
              },
              color: { value: "{components.searchfield.button._focus.color}" },
            },
            _hover: {
              backgroundColor: {
                value: "{components.searchfield.button._hover.backgroundColor}",
              },
              borderColor: {
                value: "{components.searchfield.button._hover.borderColor}",
              },
              color: { value: "{components.searchfield.button._hover.color}" },
            },
          },
        },
      },
      copy: {
        fontSize: { value: "{fontSizes.xs}" },
        gap: { value: "{space.relative.medium}" },
        svg: { path: { fill: { value: "{colors.font.primary}" } } },
        toolTip: {
          bottom: { value: "{space.large}" },
          color: { value: "{colors.teal.100}" },
          fontSize: { value: "{fontSizes.xxs}" },
        },
      },
      countrycodeselect: { height: { value: "{space.relative.full.value}" } },
      divider: {
        borderStyle: { value: "solid" },
        borderColor: { value: "{colors.border.primary.value}" },
        borderWidth: { value: "{borderWidths.medium.value}" },
        label: {
          color: { value: "{colors.font.tertiary.value}" },
          paddingInline: { value: "{space.medium.value}" },
          fontSize: { value: "{fontSizes.small.value}" },
          backgroundColor: { value: "{colors.background.primary.value}" },
        },
        small: { borderWidth: { value: "{borderWidths.small.value}" } },
        large: { borderWidth: { value: "{borderWidths.large.value}" } },
        opacity: { value: "{opacities.60.value}" },
      },
      dropzone: {
        backgroundColor: { value: "{colors.background.primary}" },
        borderRadius: { value: "{radii.small}" },
        borderColor: { value: "{colors.border.primary}" },
        borderStyle: { value: "dashed" },
        borderWidth: { value: "{borderWidths.small}" },
        color: { value: "{colors.font.primary}" },
        gap: { value: "{space.small}" },
        paddingBlock: { value: "{space.xl}" },
        paddingInline: { value: "{space.large}" },
        textAlign: { value: "center" },
        _active: {
          backgroundColor: { value: "{colors.brand.primary.10}" },
          borderRadius: { value: "{components.dropzone.borderRadius}" },
          borderColor: { value: "{colors.border.pressed}" },
          borderStyle: { value: "{components.dropzone.borderStyle}" },
          borderWidth: { value: "{components.dropzone.borderWidth}" },
          color: { value: "{colors.font.primary}" },
        },
        _disabled: {
          backgroundColor: { value: "{colors.background.disabled}" },
          borderRadius: { value: "{components.dropzone.borderRadius}" },
          borderColor: { value: "{colors.border.disabled}" },
          borderStyle: { value: "{components.dropzone.borderStyle}" },
          borderWidth: { value: "{components.dropzone.borderWidth}" },
          color: { value: "{colors.font.disabled}" },
        },
        accepted: {
          backgroundColor: { value: "{colors.background.success}" },
          borderRadius: { value: "{components.dropzone.borderRadius}" },
          borderColor: { value: "{colors.border.success}" },
          borderStyle: { value: "{components.dropzone.borderStyle}" },
          borderWidth: { value: "{components.dropzone.borderWidth}" },
          color: { value: "{colors.font.success}" },
        },
        rejected: {
          backgroundColor: { value: "{colors.background.error}" },
          borderRadius: { value: "{components.dropzone.borderRadius}" },
          borderColor: { value: "{colors.border.pressed}" },
          borderStyle: { value: "{components.dropzone.borderStyle}" },
          borderWidth: { value: "{components.dropzone.borderWidth}" },
          color: { value: "{colors.font.error}" },
        },
      },
      expander: {
        display: { value: "block" },
        backgroundColor: { value: "{colors.background.primary.value}" },
        borderRadius: { value: "{radii.medium.value}" },
        boxShadow: { value: "{shadows.large.value}" },
        width: { value: "100%" },
        item: {
          marginTop: { value: "1px" },
          boxShadow: { value: "{shadows.small.value}" },
          borderBottomLeftRadius: { value: "{radii.medium.value}" },
          borderBottomRightRadius: { value: "{radii.medium.value}" },
          borderTopLeftRadius: { value: "{radii.medium.value}" },
          borderTopRightRadius: { value: "{radii.medium.value}" },
          borderStartStartRadius: { value: "{radii.medium.value}" },
          borderStartEndRadius: { value: "{radii.medium.value}" },
          borderEndStartRadius: { value: "{radii.medium.value}" },
          borderEndEndRadius: { value: "{radii.medium.value}" },
          _focus: {
            boxShadow: {
              value: {
                offsetX: "0",
                offsetY: "0",
                blurRadius: "0",
                spreadRadius: "2px",
                color: "{colors.border.focus.value}",
              },
            },
          },
        },
        header: {
          boxShadow: {
            value: {
              offsetX: "0",
              offsetY: "1px",
              blurRadius: "0",
              color: "{colors.overlay.20.value}",
            },
          },
        },
        trigger: {
          minHeight: { value: "3rem" },
          paddingInlineStart: { value: "{space.large.value}" },
          paddingInlineEnd: { value: "{space.large.value}" },
          alignItems: { value: "center" },
          justifyContent: { value: "space-between" },
          _hover: { backgroundColor: { value: "{colors.overlay.10.value}" } },
        },
        content: {
          paddingInlineStart: { value: "{space.large.value}" },
          paddingInlineEnd: { value: "{space.large.value}" },
          text: {
            color: { value: "{colors.font.secondary.value}" },
            paddingBlockStart: { value: "{space.medium.value}" },
            paddingBlockEnd: { value: "{space.medium.value}" },
          },
          _open: {
            animationDuration: { value: "{time.medium.value}" },
            animationTimingFunction: {
              value: "cubic-bezier(0.87, 0, 0.13, 1)",
            },
          },
          _closed: {
            animationDuration: { value: "{time.medium.value}" },
            animationTimingFunction: {
              value: "cubic-bezier(0.87, 0, 0.13, 1)",
            },
          },
        },
        icon: {
          transitionDuration: { value: "{time.medium.value}" },
          transitionTimingFunction: { value: "cubic-bezier(0.87, 0, 0.13, 1)" },
        },
      },
      field: {
        gap: { value: "{space.xs.value}" },
        fontSize: { value: "{fontSizes.medium.value}" },
        flexDirection: { value: "column" },
        small: {
          gap: { value: "{space.xxxs.value}" },
          fontSize: { value: "{fontSizes.small.value}" },
        },
        large: {
          gap: { value: "{space.small.value}" },
          fontSize: { value: "{fontSizes.large.value}" },
        },
        label: { color: { value: "{colors.font.secondary.value}" } },
      },
      fieldcontrol: {
        borderStyle: { value: "solid" },
        borderColor: { value: "{colors.border.primary.value}" },
        borderWidth: { value: "{borderWidths.small.value}" },
        borderRadius: { value: "{radii.small.value}" },
        color: { value: "{colors.font.primary.value}" },
        paddingBlockStart: { value: "{space.xs.value}" },
        paddingBlockEnd: { value: "{space.xs.value}" },
        paddingInlineStart: { value: "{space.medium.value}" },
        paddingInlineEnd: { value: "{space.medium.value}" },
        fontSize: { value: "{components.field.fontSize.value}" },
        lineHeight: { value: "{lineHeights.medium.value}" },
        transitionDuration: { value: "{time.medium.value}" },
        outlineColor: { value: "{colors.transparent.value}" },
        outlineStyle: { value: "solid" },
        outlineWidth: { value: "{outlineWidths.medium.value}" },
        outlineOffset: { value: "{outlineOffsets.medium.value}" },
        small: {
          fontSize: { value: "{components.field.small.fontSize.value}" },
          paddingBlockStart: { value: "{space.xxs.value}" },
          paddingBlockEnd: { value: "{space.xxs.value}" },
          paddingInlineStart: { value: "{space.small.value}" },
          paddingInlineEnd: { value: "{space.small.value}" },
        },
        large: {
          fontSize: { value: "{components.field.large.fontSize.value}" },
          paddingBlockStart: { value: "{space.xs.value}" },
          paddingBlockEnd: { value: "{space.xs.value}" },
          paddingInlineStart: { value: "{space.medium.value}" },
          paddingInlineEnd: { value: "{space.medium.value}" },
        },
        quiet: {
          borderStyle: { value: "none" },
          borderInlineStart: { value: "none" },
          borderInlineEnd: { value: "none" },
          borderBlockStart: { value: "none" },
          borderRadius: { value: "0" },
          _focus: {
            borderBlockEndColor: { value: "{colors.border.focus.value}" },
            boxShadow: {
              value: {
                offsetX: "0px",
                offsetY: "1px",
                color: "{colors.border.focus.value}",
                blurRadius: "0px",
              },
            },
          },
          _error: {
            borderBlockEndColor: { value: "{colors.border.error.value}" },
            _focus: {
              boxShadow: {
                value: {
                  offsetX: "0px",
                  offsetY: "1px",
                  color: "{colors.border.error.value}",
                  blurRadius: "0px",
                },
              },
            },
          },
        },
        _focus: {
          borderColor: { value: "{colors.border.focus.value}" },
          boxShadow: {
            value: {
              offsetX: "0px",
              offsetY: "0px",
              blurRadius: "0px",
              spreadRadius: "1px",
              color: "{colors.border.focus.value}",
            },
          },
        },
        _disabled: {
          color: { value: "{colors.font.disabled.value}" },
          cursor: { value: "not-allowed" },
          borderColor: { value: "{colors.transparent.value}" },
          backgroundColor: { value: "{colors.background.disabled.value}" },
        },
        _error: {
          borderColor: { value: "{colors.border.error.value}" },
          color: { value: "{colors.font.error.value}" },
          _focus: {
            boxShadow: {
              value: {
                offsetX: "0px",
                offsetY: "0px",
                blurRadius: "0px",
                spreadRadius: "1px",
                color: "{colors.border.error.value}",
              },
            },
          },
        },
      },
      fieldgroup: {
        gap: { value: "{space.zero.value}" },
        vertical: { alignItems: { value: "center" } },
        outer: { alignItems: { value: "center" } },
      },
      fieldmessages: {
        error: {
          color: { value: "{colors.font.error.value}" },
          fontSize: { value: "{fontSizes.small.value}" },
        },
        description: {
          color: { value: "{colors.font.secondary.value}" },
          fontStyle: { value: "italic" },
          fontSize: { value: "{fontSizes.small.value}" },
        },
      },
      fieldset: {
        backgroundColor: { value: "transparent" },
        borderRadius: { value: "{radii.xs.value}" },
        flexDirection: { value: "column" },
        gap: { value: "{components.field.gap.value}" },
        legend: {
          color: { value: "{colors.font.primary.value}" },
          fontSize: { value: "{components.field.fontSize.value}" },
          fontWeight: { value: "{fontWeights.bold.value}" },
          lineHeight: { value: "{lineHeights.medium.value}" },
          small: {
            fontSize: { value: "{components.field.small.fontSize.value}" },
          },
          large: {
            fontSize: { value: "{components.field.large.fontSize.value}" },
          },
        },
        outlined: {
          padding: { value: "{space.medium.value}" },
          borderColor: { value: "{colors.neutral.40.value}" },
          borderWidth: { value: "{borderWidths.small.value}" },
          borderStyle: { value: "solid" },
          small: { padding: { value: "{space.small.value}" } },
          large: { padding: { value: "{space.large.value}" } },
        },
        small: { gap: { value: "{components.field.small.gap.value}" } },
        large: { gap: { value: "{components.field.large.gap.value}" } },
      },
      fileuploader: {
        dropzone: {
          backgroundColor: { value: "{colors.background.primary}" },
          borderRadius: { value: "{radii.small}" },
          borderColor: { value: "{colors.border.primary}" },
          borderStyle: { value: "dashed" },
          borderWidth: { value: "{borderWidths.small}" },
          gap: { value: "{space.small}" },
          paddingBlock: { value: "{space.xl}" },
          paddingInline: { value: "{space.large}" },
          textAlign: { value: "center" },
          _active: {
            backgroundColor: { value: "{colors.brand.primary.10}" },
            borderRadius: {
              value: "{components.fileuploader.dropzone.borderRadius}",
            },
            borderColor: { value: "{colors.border.pressed}" },
            borderStyle: {
              value: "{components.fileuploader.dropzone.borderStyle}",
            },
            borderWidth: { value: "{borderWidths.medium}" },
          },
          icon: {
            color: { value: "{colors.border.primary}" },
            fontSize: { value: "{fontSizes.xxl}" },
          },
          text: {
            color: { value: "{colors.font.tertiary}" },
            fontSize: { value: "{fontSizes.medium}" },
            fontWeight: { value: "{fontWeights.bold}" },
          },
        },
        file: {
          backgroundColor: { value: "{colors.background.primary}" },
          borderRadius: { value: "{radii.small}" },
          borderColor: { value: "{colors.border.primary}" },
          borderStyle: { value: "solid" },
          borderWidth: { value: "{borderWidths.small}" },
          paddingBlock: { value: "{space.xs}" },
          paddingInline: { value: "{space.small}" },
          gap: { value: "{space.small}" },
          alignItems: { value: "baseline" },
          name: {
            fontSize: { value: "{fontSizes.medium}" },
            fontWeight: { value: "{fontWeights.bold}" },
            color: { value: "{colors.font.primary}" },
          },
          size: {
            fontSize: { value: "{fontSizes.small}" },
            fontWeight: { value: "{fontWeights.normal}" },
            color: { value: "{colors.font.tertiary}" },
          },
          image: {
            width: { value: "{space.xxl}" },
            height: { value: "{space.xxl}" },
            backgroundColor: { value: "{colors.background.secondary}" },
            color: { value: "{colors.font.tertiary}" },
            borderRadius: { value: "{radii.small}" },
          },
        },
        loader: {
          strokeLinecap: { value: "round" },
          strokeEmpty: { value: "{colors.border.secondary}" },
          strokeFilled: { value: "{components.loader.strokeFilled}" },
          strokeWidth: { value: "{borderWidths.large}" },
        },
        previewer: {
          backgroundColor: { value: "{colors.background.primary}" },
          borderColor: { value: "{colors.border.primary}" },
          borderStyle: { value: "solid" },
          borderWidth: { value: "{borderWidths.small}" },
          borderRadius: { value: "{radii.small}" },
          paddingBlock: { value: "{space.zero}" },
          paddingInline: { value: "{space.zero}" },
          maxHeight: { value: "40rem" },
          maxWidth: { value: "auto" },
          text: {
            fontSize: { value: "{fontSizes.medium}" },
            fontWeight: { value: "{fontWeights.bold}" },
            color: { value: "{colors.font.primary}" },
          },
          body: {
            paddingBlock: { value: "{space.medium}" },
            paddingInline: { value: "{space.medium}" },
            gap: { value: "{space.small}" },
          },
          footer: {
            borderColor: { value: "{colors.border.secondary}" },
            borderStyle: { value: "solid" },
            borderWidth: { value: "{borderWidths.small}" },
            paddingBlock: { value: "{space.medium}" },
            paddingInline: { value: "{space.medium}" },
            justifyContent: { value: "space-between" },
          },
        },
      },
      flex: {
        gap: { value: "{space.medium.value}" },
        justifyContent: { value: "normal" },
        alignItems: { value: "stretch" },
        alignContent: { value: "normal" },
        flexWrap: { value: "nowrap" },
      },
      heading: {
        1: {
          fontSize: { value: "{fontSizes.xxxxl.value}" },
          fontWeight: { value: "{fontWeights.light.value}" },
        },
        2: {
          fontSize: { value: "{fontSizes.xxxl.value}" },
          fontWeight: { value: "{fontWeights.normal.value}" },
        },
        3: {
          fontSize: { value: "{fontSizes.xxl.value}" },
          fontWeight: { value: "{fontWeights.medium.value}" },
        },
        4: {
          fontSize: { value: "{fontSizes.xl.value}" },
          fontWeight: { value: "{fontWeights.semibold.value}" },
        },
        5: {
          fontSize: { value: "{fontSizes.large.value}" },
          fontWeight: { value: "{fontWeights.bold.value}" },
        },
        6: {
          fontSize: { value: "{fontSizes.medium.value}" },
          fontWeight: { value: "{fontWeights.extrabold.value}" },
        },
        color: { value: "{colors.font.primary.value}" },
        lineHeight: { value: "{lineHeights.small.value}" },
      },
      icon: { lineHeight: { value: "1" }, height: { value: "1em" } },
      highlightmatch: {
        highlighted: { fontWeight: { value: "{fontWeights.bold}" } },
      },
      image: {
        maxWidth: { value: "100%" },
        height: { value: "auto" },
        objectFit: { value: "initial" },
        objectPosition: { value: "initial" },
      },
      inappmessaging: {
        banner: { height: { value: "150px " }, width: { value: "400px " } },
        button: {
          backgroundColor: { value: "#e8e8e8" },
          borderRadius: { value: "5px" },
          color: { value: "black" },
        },
        dialog: {
          height: { value: "50vh" },
          minHeight: { value: "400px" },
          minWidth: { value: "400px" },
          width: { value: "30vw" },
        },
        header: {
          fontSize: { value: "{fontSizes.medium.value}" },
          fontWeight: { value: "{fontWeights.extrabold.value}" },
        },
      },
      input: {
        color: { value: "{components.fieldcontrol.color.value}" },
        borderColor: { value: "{components.fieldcontrol.borderColor.value}" },
        fontSize: { value: "{components.fieldcontrol.fontSize.value}" },
        _focus: {
          borderColor: {
            value: "{components.fieldcontrol._focus.borderColor.value}",
          },
        },
      },
      link: {
        active: { color: { value: "{colors.font.active.value}" } },
        color: { value: "{colors.font.interactive.value}" },
        focus: { color: { value: "{colors.font.focus.value}" } },
        hover: { color: { value: "{colors.font.hover.value}" } },
        visited: { color: { value: "{colors.font.interactive.value}" } },
      },
      liveness: {
        cameraModule: { backgroundColor: { value: "{colors.black}" } },
      },
      loader: {
        width: { value: "{fontSizes.medium.value}" },
        height: { value: "{fontSizes.medium.value}" },
        fontSize: { value: "{fontSizes.xs.value}" },
        strokeEmpty: { value: "{colors.neutral.20.value}" },
        strokeFilled: { value: "{colors.brand.primary.80.value}" },
        strokeLinecap: { value: "round" },
        animationDuration: { value: "1s" },
        small: {
          width: { value: "{fontSizes.small.value}" },
          height: { value: "{fontSizes.small.value}" },
          fontSize: { value: "{fontSizes.xxs.value}" },
        },
        large: {
          width: { value: "{fontSizes.large.value}" },
          height: { value: "{fontSizes.large.value}" },
          fontSize: { value: "{fontSizes.small.value}" },
        },
        linear: {
          width: { value: "100%" },
          minWidth: { value: "5rem" },
          fontSize: { value: "{fontSizes.xxs.value}" },
          strokeWidth: { value: "{fontSizes.xxs.value}" },
          strokeFilled: { value: "{colors.brand.primary.80.value}" },
          strokeEmpty: { value: "{colors.neutral.20.value}" },
          strokeLinecap: { value: "round" },
          animationDuration: { value: "1s" },
          small: {
            strokeWidth: { value: "{fontSizes.xxxs.value}" },
            fontSize: { value: "{fontSizes.xxxs.value}" },
          },
          large: {
            strokeWidth: { value: "{fontSizes.xs.value}" },
            fontSize: { value: "{fontSizes.xs.value}" },
          },
        },
        text: { fill: { value: "{colors.font.primary.value}" } },
      },
      menu: {
        backgroundColor: { value: "{colors.background.primary.value}" },
        borderRadius: { value: "{radii.medium.value}" },
        borderWidth: { value: "{borderWidths.small.value}" },
        borderStyle: { value: "solid" },
        borderColor: { value: "{colors.border.primary.value}" },
        boxShadow: { value: "{shadows.large.value}" },
        flexDirection: { value: "column" },
        gap: { value: "{space.zero.value}" },
        maxWidth: { value: "30rem" },
        minWidth: { value: "14rem" },
        small: {
          width: { value: "{fontSizes.medium.value}" },
          height: { value: "{fontSizes.medium.value}" },
        },
        large: {
          width: { value: "{fontSizes.xxxl.value}" },
          height: { value: "{fontSizes.xxxl.value}" },
        },
        item: {
          minHeight: { value: "2.5rem" },
          paddingInlineStart: { value: "{space.medium.value}" },
          paddingInlineEnd: { value: "{space.medium.value}" },
        },
      },
      message: {
        alignItems: { value: "center" },
        backgroundColor: { value: "{colors.background.tertiary.value}" },
        borderColor: { value: "transparent" },
        borderStyle: { value: "solid" },
        borderWidth: { value: "{borderWidths.small.value}" },
        borderRadius: { value: "{radii.xs.value}" },
        color: { value: "{colors.font.primary.value}" },
        justifyContent: { value: "flex-start" },
        paddingBlock: { value: "{space.small.value}" },
        paddingInline: { value: "{space.medium.value}" },
        lineHeight: { value: "{lineHeights.small.value}" },
        icon: { size: { value: "{fontSizes.xl.value}" } },
        heading: {
          fontSize: { value: "{fontSizes.medium.value}" },
          fontWeight: { value: "{fontWeights.bold.value}" },
        },
        dismiss: { gap: { value: "{space.xxs.value}" } },
        plain: {
          color: { value: "{colors.font.primary.value}" },
          backgroundColor: { value: "{colors.background.primary.value}" },
          borderColor: { value: "transparent" },
          info: {
            color: { value: "{colors.font.info.value}" },
            backgroundColor: { value: "{colors.background.primary.value}" },
            borderColor: { value: "transparent" },
          },
          error: {
            color: { value: "{colors.font.error.value}" },
            backgroundColor: { value: "{colors.background.primary.value}" },
            borderColor: { value: "transparent" },
          },
          success: {
            color: { value: "{colors.font.success.value}" },
            backgroundColor: { value: "{colors.background.primary.value}" },
            borderColor: { value: "transparent" },
          },
          warning: {
            color: { value: "{colors.font.warning.value}" },
            backgroundColor: { value: "{colors.background.primary.value}" },
            borderColor: { value: "transparent" },
          },
        },
        outlined: {
          color: { value: "{colors.font.primary.value}" },
          backgroundColor: { value: "{colors.background.primary.value}" },
          borderColor: { value: "{colors.border.primary.value}" },
          info: {
            color: { value: "{colors.font.info.value}" },
            backgroundColor: { value: "{colors.background.primary.value}" },
            borderColor: { value: "{colors.border.info.value}" },
          },
          error: {
            color: { value: "{colors.font.error.value}" },
            backgroundColor: { value: "{colors.background.primary.value}" },
            borderColor: { value: "{colors.border.error.value}" },
          },
          success: {
            color: { value: "{colors.font.success.value}" },
            backgroundColor: { value: "{colors.background.primary.value}" },
            borderColor: { value: "{colors.border.success.value}" },
          },
          warning: {
            color: { value: "{colors.font.warning.value}" },
            backgroundColor: { value: "{colors.background.primary.value}" },
            borderColor: { value: "{colors.border.warning.value}" },
          },
        },
        filled: {
          color: { value: "{colors.font.primary.value}" },
          backgroundColor: { value: "{colors.background.secondary.value}" },
          borderColor: { value: "transparent" },
          info: {
            color: { value: "{colors.font.info.value}" },
            backgroundColor: { value: "{colors.background.info.value}" },
            borderColor: { value: "transparent" },
          },
          error: {
            color: { value: "{colors.font.error.value}" },
            backgroundColor: { value: "{colors.background.error.value}" },
            borderColor: { value: "transparent" },
          },
          success: {
            color: { value: "{colors.font.success.value}" },
            backgroundColor: { value: "{colors.background.success.value}" },
            borderColor: { value: "transparent" },
          },
          warning: {
            color: { value: "{colors.font.warning.value}" },
            backgroundColor: { value: "{colors.background.warning.value}" },
            borderColor: { value: "transparent" },
          },
        },
      },
      pagination: {
        current: {
          alignItems: { value: "center" },
          justifyContent: { value: "center" },
          color: { value: "{colors.font.inverse.value}" },
          fontSize: { value: "{fontSizes.small.value}" },
          backgroundColor: { value: "{colors.overlay.40.value}" },
        },
        button: {
          color: { value: "{colors.font.primary.value}" },
          paddingInlineStart: { value: "{space.xxs.value}" },
          paddingInlineEnd: { value: "{space.xxs.value}" },
          transitionProperty: { value: "background-color" },
          transitionDuration: { value: "{time.medium.value}" },
          hover: {
            backgroundColor: { value: "{colors.overlay.10.value}" },
            color: { value: "{colors.font.primary.value}" },
          },
          disabled: { color: { value: "{colors.font.disabled.value}" } },
        },
        ellipsis: {
          alignItems: { value: "baseline" },
          justifyContent: { value: "center" },
          paddingInlineStart: { value: "{space.xs.value}" },
          paddingInlineEnd: { value: "{space.xs.value}" },
        },
        itemContainer: {
          marginLeft: { value: "{space.xxxs.value}" },
          marginRight: { value: "{space.xxxs.value}" },
        },
        itemShared: {
          height: { value: "{fontSizes.xxl.value}" },
          minWidth: { value: "{fontSizes.xxl.value}" },
          borderRadius: { value: "{fontSizes.medium.value}" },
        },
      },
      passwordfield: {
        color: { value: "{components.fieldcontrol.color.value}" },
        button: {
          color: { value: "{components.button.color.value}" },
          _active: {
            backgroundColor: {
              value: "{components.button._active.backgroundColor.value}",
            },
            borderColor: {
              value: "{components.button._active.borderColor.value}",
            },
            color: { value: "{components.button._active.color.value}" },
          },
          _disabled: {
            backgroundColor: {
              value: "{components.button._disabled.backgroundColor.value}",
            },
            borderColor: {
              value: "{components.button._disabled.borderColor.value}",
            },
            color: { value: "{components.button._disabled.color.value}" },
          },
          _focus: {
            backgroundColor: {
              value: "{components.button._focus.backgroundColor.value}",
            },
            borderColor: {
              value: "{components.button._focus.borderColor.value}",
            },
            color: { value: "{components.button._focus.color.value}" },
          },
          _hover: {
            backgroundColor: {
              value: "{components.button._hover.backgroundColor.value}",
            },
            borderColor: {
              value: "{components.button._hover.borderColor.value}",
            },
            color: { value: "{components.button._hover.color.value}" },
          },
        },
      },
      phonenumberfield: {
        color: { value: "{components.fieldcontrol.color}" },
        borderColor: { value: "{components.fieldcontrol.borderColor}" },
        fontSize: { value: "{components.fieldcontrol.fontSize}" },
        _focus: {
          borderColor: {
            value: "{components.fieldcontrol._focus.borderColor}",
          },
        },
      },
      placeholder: {
        borderRadius: { value: "{radii.small.value}" },
        transitionDuration: { value: "{time.long.value}" },
        startColor: { value: "{colors.background.secondary.value}" },
        endColor: { value: "{colors.background.tertiary.value}" },
        small: { height: { value: "{space.small.value}" } },
        default: { height: { value: "{space.medium.value}" } },
        large: { height: { value: "{space.large.value}" } },
      },
      radio: {
        alignItems: { value: "center" },
        justifyContent: { value: "flex-start" },
        gap: { value: "inherit" },
        _disabled: { cursor: { value: "not-allowed" } },
        button: {
          alignItems: { value: "center" },
          justifyContent: { value: "center" },
          width: { value: "{fontSizes.medium.value}" },
          height: { value: "{fontSizes.medium.value}" },
          boxSizing: { value: "border-box" },
          borderWidth: { value: "{borderWidths.medium.value}" },
          borderStyle: { value: "solid" },
          borderRadius: { value: "50%" },
          borderColor: { value: "{colors.border.primary.value}" },
          color: { value: "{colors.background.primary.value}" },
          backgroundColor: { value: "{colors.background.primary.value}" },
          transitionProperty: { value: "all" },
          transitionDuration: { value: "{time.medium.value}" },
          outlineColor: { value: "{colors.transparent.value}" },
          outlineStyle: { value: "solid" },
          outlineWidth: { value: "{outlineWidths.medium.value}" },
          outlineOffset: { value: "{outlineOffsets.medium.value}" },
          padding: { value: "{borderWidths.medium.value}" },
          small: {
            width: { value: "{fontSizes.small.value}" },
            height: { value: "{fontSizes.small.value}" },
          },
          large: {
            width: { value: "{fontSizes.large.value}" },
            height: { value: "{fontSizes.large.value}" },
          },
          _checked: {
            color: { value: "{colors.brand.primary.80.value}" },
            _disabled: {
              color: { value: "{colors.background.disabled.value}" },
            },
          },
          _focus: {
            borderColor: { value: "{colors.border.focus.value}" },
            boxShadow: {
              value: "{components.fieldcontrol._focus.boxShadow.value}",
            },
          },
          _error: {
            borderColor: { value: "{colors.border.error.value}" },
            _focus: {
              boxShadow: {
                value:
                  "{components.fieldcontrol._error._focus.boxShadow.value}",
              },
            },
          },
          _disabled: {
            borderColor: { value: "{colors.border.disabled.value}" },
            backgroundColor: { value: "{colors.background.primary.value}" },
          },
        },
        label: {
          color: { value: "{components.text.color.value}" },
          _disabled: { color: { value: "{colors.font.disabled.value}" } },
        },
      },
      radiogroup: {
        radio: {
          borderWidth: { value: "{components.radio.button.borderWidth}" },
          borderColor: { value: "{components.radio.button.borderColor}" },
          backgroundColor: {
            value: "{components.radio.button.backgroundColor}",
          },
          _checked: {
            color: { value: "{components.radio.button._checked.color}" },
          },
          label: { color: { value: "{components.radio.label.color}" } },
        },
        label: { color: { value: "{components.field.label.color}" } },
      },
      rating: {
        large: { size: { value: "{fontSizes.xxxl.value}" } },
        default: { size: { value: "{fontSizes.xl.value}" } },
        small: { size: { value: "{fontSizes.small.value}" } },
        filled: { color: { value: "{colors.brand.secondary.80.value}" } },
        empty: { color: { value: "{colors.background.tertiary.value}" } },
      },
      searchfield: {
        color: { value: "{components.fieldcontrol.color.value}" },
        button: {
          color: { value: "{components.button.color.value}" },
          backgroundColor: { value: "{colors.background.primary.value}" },
          _active: {
            backgroundColor: {
              value: "{components.button._active.backgroundColor.value}",
            },
            borderColor: {
              value: "{components.button._active.borderColor.value}",
            },
            color: { value: "{components.button._active.color.value}" },
          },
          _disabled: {
            backgroundColor: {
              value: "{components.button._disabled.backgroundColor.value}",
            },
            borderColor: {
              value: "{components.button._disabled.borderColor.value}",
            },
            color: { value: "{components.button._disabled.color.value}" },
          },
          _focus: {
            backgroundColor: {
              value: "{components.button._focus.backgroundColor.value}",
            },
            borderColor: {
              value: "{components.button._focus.borderColor.value}",
            },
            color: { value: "{components.button._focus.color.value}" },
          },
          _hover: {
            backgroundColor: {
              value: "{components.button._hover.backgroundColor.value}",
            },
            borderColor: {
              value: "{components.button._hover.borderColor.value}",
            },
            color: { value: "{components.button._hover.color.value}" },
          },
        },
      },
      select: {
        color: { value: "{components.fieldcontrol.color}" },
        backgroundColor: { value: "{colors.background.primary.value}" },
        paddingInlineEnd: { value: "{space.xxl.value}" },
        _disabled: {
          color: { value: "{colors.font.disabled.value}" },
          backgroundColor: { value: "{colors.background.disabled.value}" },
        },
        wrapper: {
          flex: { value: "1" },
          display: { value: "block" },
          position: { value: "relative" },
          cursor: { value: "pointer" },
        },
        iconWrapper: {
          alignItems: { value: "center" },
          position: { value: "absolute" },
          top: { value: "50%" },
          right: { value: "{space.medium.value}" },
          transform: { value: "translateY(-50%)" },
          pointerEvents: { value: "none" },
          small: { right: { value: "{space.xs.value}" } },
          large: { right: { value: "{space.medium.value}" } },
        },
        option: {
          backgroundColor: { value: "transparent" },
          color: { value: "{colors.font.primary.value}" },
          _disabled: {
            color: { value: "{colors.font.disabled.value}" },
            backgroundColor: { value: "transparent" },
          },
        },
        whiteSpace: { value: "nowrap" },
        minWidth: { value: "6.5rem" },
        small: {
          minWidth: { value: "5.5rem" },
          paddingInlineEnd: { value: "{space.xl.value}" },
        },
        large: {
          minWidth: { value: "7.5rem" },
          paddingInlineEnd: { value: "{space.xxl.value}" },
        },
        expanded: {
          paddingBlock: { value: "{space.xs.value}" },
          paddingInline: { value: "{space.small.value}" },
          option: {
            paddingBlock: { value: "{space.xs.value}" },
            paddingInline: { value: "{space.small.value}" },
          },
        },
      },
      selectfield: {
        borderColor: { value: "{components.fieldcontrol.borderColor}" },
        color: { value: "{components.fieldcontrol.color}" },
        flexDirection: { value: "column" },
        fontSize: { value: "{components.fieldcontrol.fontSize}" },
        _focus: {
          borderColor: {
            value: "{components.fieldcontrol._focus.borderColor}",
          },
        },
        label: { color: { value: "{components.field.label.color}" } },
      },
      sliderfield: {
        paddingBlock: { value: "{space.xs.value}" },
        track: {
          backgroundColor: { value: "{colors.background.quaternary.value}" },
          borderRadius: { value: "9999px" },
          height: { value: "0.375rem" },
          minWidth: { value: "10rem" },
        },
        range: {
          backgroundColor: { value: "{colors.brand.primary.80.value}" },
          borderRadius: { value: "9999px" },
          _disabled: {
            backgroundColor: { value: "{colors.background.disabled.value}" },
          },
        },
        thumb: {
          width: { value: "1.25rem" },
          height: { value: "1.25rem" },
          backgroundColor: { value: "{colors.background.primary.value}" },
          boxShadow: { value: "{shadows.small.value}" },
          borderRadius: { value: "50%" },
          borderWidth: { value: "{borderWidths.medium.value}" },
          borderColor: { value: "{colors.border.primary.value}" },
          borderStyle: { value: "solid" },
          _disabled: {
            backgroundColor: { value: "{colors.background.disabled.value}" },
            borderColor: { value: "transparent" },
            boxShadow: { value: "none" },
          },
          _hover: {
            backgroundColor: { value: "{colors.background.primary.value}" },
            borderColor: { value: "{colors.border.focus.value}" },
          },
          _focus: {
            borderColor: { value: "{colors.border.focus.value}" },
            boxShadow: {
              value: {
                offsetX: "0",
                offsetY: "0",
                blurRadius: "0",
                spreadRadius: "2px",
                color: "{colors.border.focus.value}",
              },
            },
          },
        },
        small: {
          track: { height: { value: "0.25rem" } },
          thumb: { width: { value: "1rem" }, height: { value: "1rem" } },
        },
        large: {
          track: { height: { value: "0.625rem" } },
          thumb: { width: { value: "1.5rem" }, height: { value: "1.5rem" } },
        },
      },
      stepperfield: {
        borderColor: { value: "{components.fieldcontrol.borderColor}" },
        flexDirection: { value: "column" },
        input: {
          color: { value: "{components.fieldcontrol.color}" },
          fontSize: { value: "{components.fieldcontrol.fontSize}" },
          textAlign: { value: "center" },
        },
        button: {
          color: { value: "{components.button.color}" },
          backgroundColor: { value: "{colors.transparent}" },
          _active: {
            color: { value: "{components.button._active.color}" },
            backgroundColor: {
              value: "{components.button._active.backgroundColor}",
            },
          },
          _focus: {
            color: { value: "{components.button._focus.color}" },
            backgroundColor: {
              value: "{components.button._focus.backgroundColor}",
            },
          },
          _disabled: {
            color: { value: "{components.button._disabled.color}" },
            backgroundColor: {
              value: "{components.fieldcontrol._disabled.backgroundColor}",
            },
          },
          _hover: {
            color: { value: "{components.button._hover.color}" },
            backgroundColor: {
              value: "{components.button._hover.backgroundColor}",
            },
          },
        },
      },
      storagemanager: {
        dropzone: {
          backgroundColor: { value: "{colors.background.primary}" },
          borderRadius: { value: "{radii.small}" },
          borderColor: { value: "{colors.border.primary}" },
          borderStyle: { value: "dashed" },
          borderWidth: { value: "{borderWidths.small}" },
          gap: { value: "{space.small}" },
          paddingBlock: { value: "{space.xl}" },
          paddingInline: { value: "{space.large}" },
          textAlign: { value: "center" },
          _active: {
            backgroundColor: { value: "{colors.brand.primary.10}" },
            borderRadius: {
              value: "{components.fileuploader.dropzone.borderRadius}",
            },
            borderColor: { value: "{colors.border.pressed}" },
            borderStyle: {
              value: "{components.fileuploader.dropzone.borderStyle}",
            },
            borderWidth: { value: "{borderWidths.medium}" },
          },
          icon: {
            color: { value: "{colors.border.primary}" },
            fontSize: { value: "{fontSizes.xxl}" },
          },
          text: {
            color: { value: "{colors.font.tertiary}" },
            fontSize: { value: "{fontSizes.medium}" },
            fontWeight: { value: "{fontWeights.bold}" },
          },
        },
        file: {
          backgroundColor: { value: "{colors.background.primary}" },
          borderRadius: { value: "{radii.small}" },
          borderColor: { value: "{colors.border.primary}" },
          borderStyle: { value: "solid" },
          borderWidth: { value: "{borderWidths.small}" },
          paddingBlock: { value: "{space.xs}" },
          paddingInline: { value: "{space.small}" },
          gap: { value: "{space.small}" },
          alignItems: { value: "baseline" },
          name: {
            fontSize: { value: "{fontSizes.medium}" },
            fontWeight: { value: "{fontWeights.bold}" },
            color: { value: "{colors.font.primary}" },
          },
          size: {
            fontSize: { value: "{fontSizes.small}" },
            fontWeight: { value: "{fontWeights.normal}" },
            color: { value: "{colors.font.tertiary}" },
          },
          image: {
            width: { value: "{space.xxl}" },
            height: { value: "{space.xxl}" },
            backgroundColor: { value: "{colors.background.secondary}" },
            color: { value: "{colors.font.tertiary}" },
            borderRadius: { value: "{radii.small}" },
          },
        },
        loader: {
          strokeLinecap: { value: "round" },
          strokeEmpty: { value: "{colors.border.secondary}" },
          strokeFilled: { value: "{components.loader.strokeFilled}" },
          strokeWidth: { value: "{borderWidths.large}" },
        },
        previewer: {
          backgroundColor: { value: "{colors.background.primary}" },
          borderColor: { value: "{colors.border.primary}" },
          borderStyle: { value: "solid" },
          borderWidth: { value: "{borderWidths.small}" },
          borderRadius: { value: "{radii.small}" },
          paddingBlock: { value: "{space.zero}" },
          paddingInline: { value: "{space.zero}" },
          maxHeight: { value: "40rem" },
          maxWidth: { value: "auto" },
          text: {
            fontSize: { value: "{fontSizes.medium}" },
            fontWeight: { value: "{fontWeights.bold}" },
            color: { value: "{colors.font.primary}" },
          },
          body: {
            paddingBlock: { value: "{space.medium}" },
            paddingInline: { value: "{space.medium}" },
            gap: { value: "{space.small}" },
          },
          footer: { justifyContent: { value: "flex-end" } },
        },
        filelist: {
          flexDirection: { value: "column" },
          gap: { value: "{space.small}" },
        },
      },
      switchfield: {
        _disabled: { opacity: { value: "{opacities.60.value}" } },
        _focused: {
          shadow: {
            value: {
              offsetX: "0px",
              offsetY: "0px",
              blurRadius: "0px",
              spreadRadius: "2px",
              color: "{colors.border.focus.value}",
            },
          },
        },
        fontSize: { value: "{fontSizes.medium.value}" },
        large: { fontSize: { value: "{fontSizes.large.value}" } },
        small: { fontSize: { value: "{fontSizes.small.value}" } },
        label: { padding: { value: "{space.xs.value}" } },
        thumb: {
          backgroundColor: { value: "{colors.background.primary.value}" },
          borderColor: { value: "transparent" },
          borderWidth: { value: "{borderWidths.small.value}" },
          borderStyle: { value: "solid" },
          borderRadius: { value: "{radii.xxxl.value}" },
          checked: { transform: { value: "{transforms.slideX.medium.value}" } },
          transition: { duration: { value: "{time.medium.value}" } },
          width: { value: "{space.relative.medium.value}" },
        },
        track: {
          backgroundColor: { value: "{colors.background.quaternary.value}" },
          borderRadius: { value: "{radii.xxxl.value}" },
          checked: {
            backgroundColor: { value: "{colors.brand.primary.80.value}" },
          },
          height: { value: "{space.relative.medium.value}" },
          padding: { value: "{outlineWidths.medium.value}" },
          transition: { duration: { value: "{time.short.value}" } },
          width: { value: "{space.relative.xl.value}" },
          _error: {
            backgroundColor: { value: "{colors.background.error.value}" },
          },
        },
      },
      table: {
        borderCollapse: { value: "collapse" },
        display: { value: "table" },
        width: { value: "100%" },
        head: {
          display: { value: "table-header-group" },
          verticalAlign: { value: "middle" },
        },
        body: {
          display: { value: "table-row-group" },
          verticalAlign: { value: "middle" },
        },
        foot: {
          display: { value: "table-footer-group" },
          verticalAlign: { value: "middle" },
        },
        row: {
          display: { value: "table-row" },
          verticalAlign: { value: "middle" },
          hover: {
            backgroundColor: { value: "{colors.background.tertiary.value}" },
          },
          striped: {
            backgroundColor: { value: "{colors.background.secondary.value}" },
          },
        },
        header: {
          borderColor: { value: "{colors.border.tertiary.value}" },
          borderStyle: { value: "solid" },
          borderWidth: { value: "{borderWidths.small.value}" },
          color: { value: "{colors.font.primary.value}" },
          display: { value: "table-cell" },
          fontSize: { value: "{fontSizes.medium.value}" },
          fontWeight: { value: "{fontWeights.bold.value}" },
          padding: { value: "{space.medium.value}" },
          verticalAlign: { value: "middle" },
          large: {
            fontSize: { value: "{fontSizes.large.value}" },
            padding: { value: "{space.large.value}" },
          },
          small: {
            fontSize: { value: "{fontSizes.small.value}" },
            padding: { value: "{space.xs.value}" },
          },
        },
        data: {
          borderColor: { value: "{colors.border.tertiary.value}" },
          borderStyle: { value: "solid" },
          borderWidth: { value: "{borderWidths.small.value}" },
          color: { value: "{colors.font.primary.value}" },
          display: { value: "table-cell" },
          fontSize: { value: "{fontSizes.medium.value}" },
          fontWeight: { value: "{fontWeights.normal.value}" },
          padding: { value: "{space.medium.value}" },
          verticalAlign: { value: "middle" },
          large: {
            fontSize: { value: "{fontSizes.large.value}" },
            padding: { value: "{space.large.value}" },
          },
          small: {
            fontSize: { value: "{fontSizes.small.value}" },
            padding: { value: "{space.xs.value}" },
          },
        },
        caption: {
          captionSide: { value: "bottom" },
          color: { value: "{colors.font.primary.value}" },
          display: { value: "table-caption" },
          fontSize: { value: "{fontSizes.medium.value}" },
          textAlign: { value: "center" },
          wordBreak: { value: "break-all" },
          large: { fontSize: { value: "{fontSizes.large.value}" } },
          small: { fontSize: { value: "{fontSizes.small.value}" } },
        },
      },
      tabs: {
        backgroundColor: { value: "transparent" },
        borderColor: { value: "{colors.border.secondary.value}" },
        borderStyle: { value: "solid" },
        borderWidth: { value: "{borderWidths.medium.value}" },
        gap: { value: "0" },
        item: {
          backgroundColor: { value: "transparent" },
          borderColor: { value: "{colors.border.secondary.value}" },
          borderStyle: { value: "solid" },
          borderWidth: { value: "{borderWidths.medium.value}" },
          color: { value: "{colors.font.secondary.value}" },
          fontSize: { value: "{fontSizes.medium.value}" },
          fontWeight: { value: "{fontWeights.bold.value}" },
          paddingVertical: { value: "{space.small.value}" },
          paddingHorizontal: { value: "{space.medium.value}" },
          textAlign: { value: "center" },
          transitionDuration: { value: "{time.medium.value}" },
          _hover: { color: { value: "{colors.font.hover.value}" } },
          _focus: { color: { value: "{colors.font.focus.value}" } },
          _active: {
            color: { value: "{colors.font.interactive.value}" },
            borderColor: { value: "{colors.font.interactive.value}" },
            backgroundColor: { value: "transparent" },
          },
          _disabled: {
            color: { value: "{colors.font.disabled.value}" },
            backgroundColor: { value: "transparent" },
            borderColor: { value: "{colors.border.tertiary.value}" },
          },
        },
      },
      text: {
        color: { value: "{colors.font.primary.value}" },
        primary: { color: { value: "{colors.font.primary.value}" } },
        secondary: { color: { value: "{colors.font.secondary.value}" } },
        tertiary: { color: { value: "{colors.font.tertiary.value}" } },
        error: { color: { value: "{colors.font.error.value}" } },
        warning: { color: { value: "{colors.font.warning.value}" } },
        success: { color: { value: "{colors.font.success.value}" } },
        info: { color: { value: "{colors.font.info.value}" } },
      },
      textareafield: {
        color: { value: "{components.fieldcontrol.color.value}" },
        borderColor: { value: "{components.fieldcontrol.borderColor.value}" },
        _focus: {
          borderColor: {
            value: "{components.fieldcontrol._focus.borderColor.value}",
          },
        },
      },
      textfield: {
        color: { value: "{components.fieldcontrol.color.value}" },
        borderColor: { value: "{components.fieldcontrol.borderColor.value}" },
        fontSize: { value: "{components.fieldcontrol.fontSize.value}" },
        _focus: {
          borderColor: {
            value: "{components.fieldcontrol._focus.borderColor.value}",
          },
        },
      },
      togglebutton: {
        borderColor: { value: "{colors.border.primary.value}" },
        color: { value: "{colors.font.primary.value}" },
        _hover: { backgroundColor: { value: "{colors.overlay.10.value}" } },
        _focus: {
          borderColor: { value: "{colors.border.focus.value}" },
          color: { value: "{colors.font.primary.value}" },
        },
        _active: { backgroundColor: { value: "{colors.transparent.value}" } },
        _disabled: {
          backgroundColor: { value: "{colors.transparent.value}" },
          borderColor: { value: "{colors.border.disabled.value}" },
          color: { value: "{colors.font.disabled.value}" },
        },
        _pressed: {
          borderColor: { value: "{colors.border.pressed.value}" },
          color: { value: "{colors.font.primary.value}" },
          backgroundColor: { value: "{colors.overlay.20.value}" },
          _hover: { backgroundColor: { value: "{colors.overlay.30.value}" } },
        },
        primary: {
          backgroundColor: { value: "{colors.transparent.value}" },
          borderWidth: { value: "{borderWidths.small.value}" },
          _focus: {
            borderColor: { value: "{colors.border.focus.value}" },
            backgroundColor: { value: "{colors.transparent.value}" },
            boxShadow: {
              value: "{components.fieldcontrol._focus.boxShadow.value}",
            },
            color: { value: "{colors.font.primary.value}" },
          },
          _hover: {
            backgroundColor: { value: "{colors.overlay.10.value}" },
            color: { value: "{colors.font.primary.value}" },
          },
          _disabled: {
            borderColor: { value: "{colors.border.disabled.value}" },
            backgroundColor: { value: "{colors.background.disabled.value}" },
            color: { value: "{colors.font.disabled.value}" },
          },
          _pressed: {
            backgroundColor: { value: "{colors.brand.primary.80.value}" },
            borderColor: { value: "{colors.brand.primary.80.value}" },
            color: { value: "{colors.background.primary.value}" },
            _focus: {
              backgroundColor: { value: "{colors.border.focus.value}" },
              borderColor: { value: "{colors.border.focus.value}" },
              color: { value: "{colors.background.primary.value}" },
            },
            _hover: {
              borderColor: { value: "{colors.brand.primary.60.value}" },
              backgroundColor: { value: "{colors.brand.primary.60.value}" },
              boxShadow: { value: "{colors.brand.primary.60.value}" },
              color: { value: "{colors.background.primary.value}" },
            },
          },
        },
        link: {
          backgroundColor: { value: "{colors.transparent.value}" },
          color: { value: "{colors.overlay.50.value}" },
          _hover: {
            backgroundColor: { value: "{colors.transparent.value}" },
            color: { value: "{colors.overlay.50.value}" },
          },
          _focus: {
            backgroundColor: { value: "{colors.transparent.value}" },
            color: { value: "{colors.overlay.50.value}" },
          },
          _disabled: {
            backgroundColor: { value: "{colors.transparent.value}" },
            color: { value: "{colors.font.disabled.value}" },
          },
          _pressed: {
            backgroundColor: { value: "{colors.transparent.value}" },
            color: { value: "{colors.overlay.90.value}" },
            _focus: {
              backgroundColor: { value: "{colors.transparent.value}" },
              color: { value: "{colors.overlay.90.value}" },
            },
            _hover: {
              color: { value: "{colors.overlay.90.value}" },
              backgroundColor: { value: "{colors.transparent.value}" },
            },
          },
        },
      },
      togglebuttongroup: {
        alignItems: { value: "center" },
        alignContent: { value: "center" },
        justifyContent: { value: "flex-start" },
      },
    },
    borderWidths: {
      small: { value: "1px" },
      medium: { value: "2px" },
      large: { value: "3px" },
    },
    colors: {
      red: {
        10: { value: "hsl(0, 75%, 95%)" },
        20: { value: "hsl(0, 75%, 85%)" },
        40: { value: "hsl(0, 75%, 75%)" },
        60: { value: "hsl(0, 50%, 50%)" },
        80: { value: "hsl(0, 95%, 30%)" },
        90: { value: "hsl(0, 100%, 20%)" },
        100: { value: "hsl(0, 100%, 15%)" },
      },
      orange: {
        10: { value: "hsl(30, 75%, 95%)" },
        20: { value: "hsl(30, 75%, 85%)" },
        40: { value: "hsl(30, 75%, 75%)" },
        60: { value: "hsl(30, 50%, 50%)" },
        80: { value: "hsl(30, 95%, 30%)" },
        90: { value: "hsl(30, 100%, 20%)" },
        100: { value: "hsl(30, 100%, 15%)" },
      },
      yellow: {
        10: { value: "hsl(60, 75%, 95%)" },
        20: { value: "hsl(60, 75%, 85%)" },
        40: { value: "hsl(60, 75%, 75%)" },
        60: { value: "hsl(60, 50%, 50%)" },
        80: { value: "hsl(60, 95%, 30%)" },
        90: { value: "hsl(60, 100%, 20%)" },
        100: { value: "hsl(60, 100%, 15%)" },
      },
      green: {
        10: { value: "hsl(130, 60%, 95%)" },
        20: { value: "hsl(130, 60%, 90%)" },
        40: { value: "hsl(130, 44%, 63%)" },
        60: { value: "hsl(130, 43%, 46%)" },
        80: { value: "hsl(130, 33%, 37%)" },
        90: { value: "hsl(130, 27%, 29%)" },
        100: { value: "hsl(130, 22%, 23%)" },
      },
      teal: {
        10: { value: "hsl(190, 75%, 95%)" },
        20: { value: "hsl(190, 75%, 85%)" },
        40: { value: "hsl(190, 70%, 70%)" },
        60: { value: "hsl(190, 50%, 50%)" },
        80: { value: "hsl(190, 95%, 30%)" },
        90: { value: "hsl(190, 100%, 20%)" },
        100: { value: "hsl(190, 100%, 15%)" },
      },
      blue: {
        10: { value: "hsl(220, 95%, 95%)" },
        20: { value: "hsl(220, 85%, 85%)" },
        40: { value: "hsl(220, 70%, 70%)" },
        60: { value: "hsl(220, 50%, 50%)" },
        80: { value: "hsl(220, 95%, 30%)" },
        90: { value: "hsl(220, 100%, 20%)" },
        100: { value: "hsl(220, 100%, 15%)" },
      },
      purple: {
        10: { value: "hsl(300, 95%, 95%)" },
        20: { value: "hsl(300, 85%, 85%)" },
        40: { value: "hsl(300, 70%, 70%)" },
        60: { value: "hsl(300, 50%, 50%)" },
        80: { value: "hsl(300, 95%, 30%)" },
        90: { value: "hsl(300, 100%, 20%)" },
        100: { value: "hsl(300, 100%, 15%)" },
      },
      pink: {
        10: { value: "hsl(340, 95%, 95%)" },
        20: { value: "hsl(340, 90%, 85%)" },
        40: { value: "hsl(340, 70%, 70%)" },
        60: { value: "hsl(340, 50%, 50%)" },
        80: { value: "hsl(340, 95%, 30%)" },
        90: { value: "hsl(340, 100%, 20%)" },
        100: { value: "hsl(340, 100%, 15%)" },
      },
      neutral: {
        10: { value: "hsl(210, 5%, 98%)" },
        20: { value: "hsl(210, 5%, 94%)" },
        40: { value: "hsl(210, 5%, 87%)" },
        60: { value: "hsl(210, 10%, 58%)" },
        80: { value: "hsl(210, 10%, 40%)" },
        90: { value: "hsl(210, 25%, 25%)" },
        100: { value: "hsl(210, 50%, 10%)" },
      },
      brand: {
        primary: {
          10: { value: "{colors.teal.10.value}" },
          20: { value: "{colors.teal.20.value}" },
          40: { value: "{colors.teal.40.value}" },
          60: { value: "{colors.teal.60.value}" },
          80: { value: "{colors.teal.80.value}" },
          90: { value: "{colors.teal.90.value}" },
          100: { value: "{colors.teal.100.value}" },
        },
        secondary: {
          10: { value: "{colors.purple.10.value}" },
          20: { value: "{colors.purple.20.value}" },
          40: { value: "{colors.purple.40.value}" },
          60: { value: "{colors.purple.60.value}" },
          80: { value: "{colors.purple.80.value}" },
          90: { value: "{colors.purple.90.value}" },
          100: { value: "{colors.purple.100.value}" },
        },
      },
      font: {
        primary: { value: "{colors.neutral.100.value}" },
        secondary: { value: "{colors.neutral.90.value}" },
        tertiary: { value: "{colors.neutral.80.value}" },
        disabled: { value: "{colors.neutral.60.value}" },
        inverse: { value: "{colors.white.value}" },
        interactive: { value: "{colors.brand.primary.80.value}" },
        hover: { value: "{colors.brand.primary.90.value}" },
        focus: { value: "{colors.brand.primary.100.value}" },
        active: { value: "{colors.brand.primary.100.value}" },
        info: { value: "{colors.blue.90.value}" },
        warning: { value: "{colors.orange.90.value}" },
        error: { value: "{colors.red.90.value}" },
        success: { value: "{colors.green.90.value}" },
      },
      background: {
        primary: { value: "{colors.white.value}" },
        secondary: { value: "{colors.neutral.10.value}" },
        tertiary: { value: "{colors.neutral.20.value}" },
        quaternary: { value: "{colors.neutral.60.value}" },
        disabled: { value: "{colors.background.tertiary.value}" },
        info: { value: "{colors.blue.10.value}" },
        warning: { value: "{colors.orange.10.value}" },
        error: { value: "{colors.red.10.value}" },
        success: { value: "{colors.green.10.value}" },
      },
      border: {
        primary: { value: "{colors.neutral.60.value}" },
        secondary: { value: "{colors.neutral.40.value}" },
        tertiary: { value: "{colors.neutral.20.value}" },
        disabled: { value: "{colors.border.tertiary.value}" },
        pressed: { value: "{colors.brand.primary.100.value}" },
        focus: { value: "{colors.brand.primary.100.value}" },
        error: { value: "{colors.red.80.value}" },
        info: { value: "{colors.blue.80.value}" },
        success: { value: "{colors.green.80.value}" },
        warning: { value: "{colors.orange.80.value}" },
      },
      shadow: {
        primary: { value: "hsla(210, 50%, 10%, 0.25)" },
        secondary: { value: "hsla(210, 50%, 10%, 0.15)" },
        tertiary: { value: "hsla(210, 50%, 10%, 0.05)" },
      },
      overlay: {
        5: { value: "hsla(0, 0%, 0%, 0.05)" },
        10: { value: "hsla(0, 0%, 0%, 0.1)" },
        20: { value: "hsla(0, 0%, 0%, 0.2)" },
        30: { value: "hsla(0, 0%, 0%, 0.3)" },
        40: { value: "hsla(0, 0%, 0%, 0.4)" },
        50: { value: "hsla(0, 0%, 0%, 0.5)" },
        60: { value: "hsla(0, 0%, 0%, 0.6)" },
        70: { value: "hsla(0, 0%, 0%, 0.7)" },
        80: { value: "hsla(0, 0%, 0%, 0.8)" },
        90: { value: "hsla(0, 0%, 0%, 0.9)" },
      },
      black: { value: "hsl(0, 0%, 0%)" },
      white: { value: "hsl(0, 0%, 100%)" },
      transparent: { value: "transparent" },
    },
    fonts: {
      default: {
        variable: {
          value:
            "'InterVariable', 'Inter var', 'Inter', -apple-system, BlinkMacSystemFont,\n        'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans',\n        sans-serif",
        },
        static: {
          value:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue',\n        'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif",
        },
      },
    },
    fontSizes: {
      xxxs: { value: "0.375rem" },
      xxs: { value: "0.5rem" },
      xs: { value: "0.75rem" },
      small: { value: "0.875rem" },
      medium: { value: "1rem" },
      large: { value: "1.25rem" },
      xl: { value: "1.5rem" },
      xxl: { value: "2rem" },
      xxxl: { value: "2.5rem" },
      xxxxl: { value: "3rem" },
    },
    fontWeights: {
      hairline: { value: "100" },
      thin: { value: "200" },
      light: { value: "300" },
      normal: { value: "400" },
      medium: { value: "500" },
      semibold: { value: "600" },
      bold: { value: "700" },
      extrabold: { value: "800" },
      black: { value: "900" },
    },
    lineHeights: {
      small: { value: "1.25" },
      medium: { value: "1.5" },
      large: { value: "2" },
    },
    opacities: {
      0: { value: "0" },
      10: { value: "0.1" },
      20: { value: "0.2" },
      30: { value: "0.3" },
      40: { value: "0.4" },
      50: { value: "0.5" },
      60: { value: "0.6" },
      70: { value: "0.7" },
      80: { value: "0.8" },
      90: { value: "0.9" },
      100: { value: "1" },
    },
    outlineOffsets: {
      small: { value: "1px" },
      medium: { value: "2px" },
      large: { value: "3px" },
    },
    outlineWidths: {
      small: { value: "1px" },
      medium: { value: "2px" },
      large: { value: "3px" },
    },
    radii: {
      xs: { value: "0.125rem" },
      small: { value: "0.25rem" },
      medium: { value: "0.5rem" },
      large: { value: "1rem" },
      xl: { value: "2rem" },
      xxl: { value: "4rem" },
      xxxl: { value: "8rem" },
    },
    shadows: {
      small: {
        value: {
          offsetX: "0px",
          offsetY: "2px",
          blurRadius: "4px",
          color: "{colors.shadow.tertiary.value}",
        },
      },
      medium: {
        value: {
          offsetX: "0px",
          offsetY: "2px",
          blurRadius: "6px",
          color: "{colors.shadow.secondary.value}",
        },
      },
      large: {
        value: {
          offsetX: "0px",
          offsetY: "4px",
          blurRadius: "12px",
          color: "{colors.shadow.primary.value}",
        },
      },
    },
    space: {
      zero: { value: "0" },
      xxxs: { value: "0.25rem" },
      xxs: { value: "0.375rem" },
      xs: { value: "0.5rem" },
      small: { value: "0.75rem" },
      medium: { value: "1rem" },
      large: { value: "1.5rem" },
      xl: { value: "2.0rem" },
      xxl: { value: "3.0rem" },
      xxxl: { value: "4.5rem" },
      relative: {
        xxxs: { value: "0.25em" },
        xxs: { value: "0.375em" },
        xs: { value: "0.5em" },
        small: { value: "0.75em" },
        medium: { value: "1em" },
        large: { value: "1.5em" },
        xl: { value: "2.0em" },
        xxl: { value: "3.0em" },
        xxxl: { value: "4.5em" },
        full: { value: "100%" },
      },
    },
    time: {
      short: { value: "100ms" },
      medium: { value: "250ms" },
      long: { value: "500ms" },
    },
    transforms: {
      slideX: {
        small: { value: "translateX(0.5em)" },
        medium: { value: "translateX(1em)" },
        large: { value: "translateX(2em)" },
      },
    },
  },
  breakpoints: {
    values: {
      base: 0,
      small: 480,
      medium: 768,
      large: 992,
      xl: 1280,
      xxl: 1536,
    },
    defaultBreakpoint: "base",
  },
});
