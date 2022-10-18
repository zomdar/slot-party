(() => {
  // widget-src/code.tsx
  var { widget } = figma;
  var {
    AutoLayout,
    Ellipse,
    Frame,
    Image,
    Rectangle,
    SVG,
    Text,
    useSyncedState,
    waitForTask
  } = widget;
  function Widget() {
    const animals = ["\u{1F43B}", "\u{1F43B}\u200D\u2744\uFE0F", "\u{1F9F8}", "\u{1F428}", "\u{1F43C}", "\u{1F430}", "\u{1F436}", "\u{1F431}", "\u{1F42D}", "\u{1F439}"];
    const [animal1, setAnimal1] = useSyncedState("animal1", animals[0]);
    const [animal1Rolling, setAnimal1Rolling] = useSyncedState("animal1Rolling", false);
    const [animal2, setAnimal2] = useSyncedState("animal2", animals[0]);
    const [animal2Rolling, setAnimal2Rolling] = useSyncedState("animal2Rolling", false);
    const [animal3, setAnimal3] = useSyncedState("animal3", animals[0]);
    const [animal3Rolling, setAnimal3Rolling] = useSyncedState("animal3Rolling", false);
    const [rolling, setRolling] = useSyncedState("rolling", false);
    const roll = () => {
      setRolling(true);
      setAnimal1Rolling(true);
      setAnimal2Rolling(true);
      setAnimal3Rolling(true);
      waitForTask(new Promise((resolve) => {
        setTimeout(() => {
          setAnimal3(animals[Math.floor(Math.random() * animals.length)]);
          setAnimal3Rolling(false);
        }, 1e3);
        setTimeout(() => {
          setAnimal2(animals[Math.floor(Math.random() * animals.length)]);
          setAnimal2Rolling(false);
          setRolling(false);
        }, 1800);
        setTimeout(() => {
          setAnimal1(animals[Math.floor(Math.random() * animals.length)]);
          setAnimal1Rolling(false);
          setRolling(false);
        }, 2600);
        setTimeout(() => {
          if (animal1 === animal2 && animal2 === animal3) {
            figma.notify("You win!");
          }
          resolve();
        }, 2800);
      }));
    };
    const findAnimal = (animal, position) => {
      const index = animals.indexOf(animal);
      if (index === -1) {
        return animals[0];
      }
      if (position === "top") {
        return animals[index + 1];
      }
      if (position === "bottom") {
        return animals[index - 1 + animals.length];
      }
    };
    return /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Slot",
      overflow: "visible",
      width: 348,
      height: 304
    }, /* @__PURE__ */ figma.widget.h(Frame, {
      name: "slot frame",
      y: 46,
      fill: "#000",
      cornerRadius: 16,
      overflow: "visible",
      width: 311,
      height: 198
    }, /* @__PURE__ */ figma.widget.h(Frame, {
      name: "row frame",
      x: 8,
      y: 8,
      fill: "#000",
      cornerRadius: 14,
      width: 295,
      height: 181
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: !animal1Rolling,
      name: "row 3",
      x: 201,
      y: -12,
      fill: "#FFF",
      stroke: "#A7A7A7",
      strokeWidth: 4,
      strokeAlign: "outside",
      overflow: "visible",
      direction: "vertical",
      spacing: 19,
      padding: {
        vertical: 13,
        horizontal: 6
      }
    }, /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Frame 6",
      effect: {
        blur: 11,
        type: "layer-blur"
      },
      overflow: "visible",
      width: 76,
      height: 266
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal1_top",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, "\u{1F43B}\u200D\u2744\uFE0F"), /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal1",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, "\u{1F43B}"), /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal1_bottom",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, "\u{1F43B}\u200D\u2744\uFE0F"))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: animal1Rolling,
      name: "row 3",
      x: 201,
      y: -54,
      fill: "#FFF",
      stroke: "#A7A7A7",
      strokeWidth: 4,
      strokeAlign: "outside",
      overflow: "visible",
      direction: "vertical",
      spacing: 19,
      padding: {
        vertical: 13,
        horizontal: 6
      }
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal1_top",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, findAnimal(animal1, "top")), /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal1",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, animal1), /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal1_bottom",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, findAnimal(animal1, "bottom"))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: !animal2Rolling,
      name: "row 2",
      x: 103,
      y: 10,
      fill: "#FFF",
      stroke: "#A7A7A7",
      strokeWidth: 4,
      strokeAlign: "outside",
      overflow: "visible",
      direction: "vertical",
      spacing: 19,
      padding: {
        vertical: 13,
        horizontal: 6
      }
    }, /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Frame 6",
      effect: {
        blur: 11,
        type: "layer-blur"
      },
      overflow: "visible",
      width: 76,
      height: 266
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal2_top",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, "\u{1F43B}\u200D\u2744\uFE0F"), /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal2",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, "\u{1F43B}"), /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal2_bottom",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, "\u{1F9F8}"))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: animal2Rolling,
      name: "row 2",
      x: 103,
      y: -54,
      fill: "#FFF",
      stroke: "#A7A7A7",
      strokeWidth: 4,
      strokeAlign: "outside",
      overflow: "visible",
      direction: "vertical",
      spacing: 19,
      padding: {
        vertical: 13,
        horizontal: 6
      }
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal2_top",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, findAnimal(animal2, "top")), /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal2",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, animal2), /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal2_bottom",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, findAnimal(animal2, "bottom"))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: !animal3Rolling,
      name: "row 1",
      x: 5,
      y: 10,
      fill: "#FFF",
      stroke: "#A7A7A7",
      strokeWidth: 4,
      strokeAlign: "outside",
      overflow: "visible",
      direction: "vertical",
      spacing: 19,
      padding: {
        vertical: 13,
        horizontal: 6
      }
    }, /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Frame 6",
      effect: {
        blur: 11,
        type: "layer-blur"
      },
      overflow: "visible",
      width: 76,
      height: 266
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal3_top",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, "\u{1F43B}\u200D\u2744\uFE0F"), /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal3",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, "\u{1F43B}\u200D\u2744\uFE0F"), /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal3_bottom",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, "\u{1F43B}\u200D\u2744\uFE0F"))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      hidden: animal3Rolling,
      name: "row 1",
      x: 5,
      y: -54,
      fill: "#FFF",
      stroke: "#A7A7A7",
      strokeWidth: 4,
      strokeAlign: "outside",
      overflow: "visible",
      direction: "vertical",
      spacing: 19,
      padding: {
        vertical: 13,
        horizontal: 6
      }
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal3_top",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, findAnimal(animal3, "top")), /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal3",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, animal3), /* @__PURE__ */ figma.widget.h(Text, {
      name: "animal3_bottom",
      fill: "#FFF",
      fontFamily: "Inter",
      fontSize: 76
    }, findAnimal(animal3, "bottom"))), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "overlay",
      fill: {
        type: "gradient-linear",
        gradientHandlePositions: [
          {
            x: 0.5,
            y: 0
          },
          {
            x: 0.5,
            y: 1
          },
          {
            x: 1,
            y: 0
          }
        ],
        gradientStops: [
          {
            position: 0,
            color: {
              r: 0,
              g: 0,
              b: 0,
              a: 1
            }
          },
          {
            position: 0.5052083134651184,
            color: {
              r: 0,
              g: 0,
              b: 0,
              a: 0
            }
          },
          {
            position: 1,
            color: {
              r: 0,
              g: 0,
              b: 0,
              a: 1
            }
          }
        ]
      },
      cornerRadius: 14,
      width: 295,
      height: 182
    })), /* @__PURE__ */ figma.widget.h(SVG, {
      name: "arrow",
      x: -18,
      y: 83,
      height: 46,
      width: 31,
      src: "<svg width='31' height='46' viewBox='0 0 31 46' fill='none' xmlns='http://www.w3.org/2000/svg'>\n<path d='M8.75 5.25493L29.463 23L8.75 40.7451L8.75 5.25493Z' fill='#A7A7A7' fill-opacity='0.69' stroke='url(#paint0_linear_228_33)' stroke-width='2'/>\n<defs>\n<linearGradient id='paint0_linear_228_33' x1='31' y1='23' x2='9.01987e-07' y2='23' gradientUnits='userSpaceOnUse'>\n<stop stop-color='#BCBCBC'/>\n<stop offset='1' stop-color='#788480' stop-opacity='0'/>\n</linearGradient>\n</defs>\n</svg>\n"
    })), /* @__PURE__ */ figma.widget.h(Frame, {
      name: "handle",
      x: 311,
      overflow: "visible",
      width: 37,
      height: 153
    }, /* @__PURE__ */ figma.widget.h(Frame, {
      name: "piece 1",
      y: 127,
      overflow: "visible",
      width: 4,
      height: 26
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Rectangle 10",
      fill: "#232323",
      width: 4,
      height: 26
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Rectangle 9",
      fill: {
        type: "gradient-linear",
        gradientHandlePositions: [
          {
            x: 0.5,
            y: 0
          },
          {
            x: 0.5,
            y: 1
          },
          {
            x: 1,
            y: 0
          }
        ],
        gradientStops: [
          {
            position: 0,
            color: {
              r: 0.9583333134651184,
              g: 0.9583333134651184,
              b: 0.9583333134651184,
              a: 1
            }
          },
          {
            position: 0.84375,
            color: {
              r: 0.2916666567325592,
              g: 0.2916666567325592,
              b: 0.2916666567325592,
              a: 0.5677083134651184
            }
          },
          {
            position: 1,
            color: {
              r: 0.4375,
              g: 0.4375,
              b: 0.4375,
              a: 0
            }
          }
        ]
      },
      width: 4,
      height: 26
    })), /* @__PURE__ */ figma.widget.h(Frame, {
      name: "piece 2",
      x: 4,
      y: 131,
      overflow: "visible",
      width: 7,
      height: 18
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Rectangle 10",
      fill: "#232323",
      width: 7,
      height: 18
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Rectangle 9",
      fill: {
        type: "gradient-linear",
        gradientHandlePositions: [
          {
            x: 0.5,
            y: 0
          },
          {
            x: 0.5,
            y: 1
          },
          {
            x: 1,
            y: 0
          }
        ],
        gradientStops: [
          {
            position: 0,
            color: {
              r: 0.9583333134651184,
              g: 0.9583333134651184,
              b: 0.9583333134651184,
              a: 1
            }
          },
          {
            position: 0.84375,
            color: {
              r: 0.2916666567325592,
              g: 0.2916666567325592,
              b: 0.2916666567325592,
              a: 0.5677083134651184
            }
          },
          {
            position: 1,
            color: {
              r: 0.4375,
              g: 0.4375,
              b: 0.4375,
              a: 0
            }
          }
        ]
      },
      width: 7,
      height: 18
    })), /* @__PURE__ */ figma.widget.h(Frame, {
      name: "handle",
      x: 19,
      y: 25,
      overflow: "visible",
      width: 8,
      height: 120
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Rectangle 6",
      x: 6,
      fill: "#696969",
      width: 2,
      height: 120
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Rectangle 7",
      y: 1,
      fill: "#FFF6",
      width: 6,
      height: 119
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Rectangle 11",
      y: -1,
      fill: {
        type: "gradient-linear",
        gradientHandlePositions: [
          {
            x: 1,
            y: 0.541
          },
          {
            x: 0,
            y: 0.541
          },
          {
            x: 1,
            y: 0.544
          }
        ],
        gradientStops: [
          {
            position: 0,
            color: {
              r: 0.12916666269302368,
              g: 0.12916666269302368,
              b: 0.12916666269302368,
              a: 1
            }
          },
          {
            position: 1,
            color: {
              r: 0.8823529481887817,
              g: 0.8823529481887817,
              b: 0.8823529481887817,
              a: 1
            }
          }
        ]
      },
      width: 8,
      height: 121
    })), /* @__PURE__ */ figma.widget.h(Frame, {
      name: "long piece",
      x: 11,
      y: 136,
      overflow: "visible",
      width: 16,
      height: 9
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Rectangle 10",
      fill: "#232323",
      width: 16,
      height: 9
    }), /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Rectangle 9",
      fill: {
        type: "gradient-linear",
        gradientHandlePositions: [
          {
            x: 0.5,
            y: 0
          },
          {
            x: 0.5,
            y: 1
          },
          {
            x: 1,
            y: 0
          }
        ],
        gradientStops: [
          {
            position: 0,
            color: {
              r: 0.9583333134651184,
              g: 0.9583333134651184,
              b: 0.9583333134651184,
              a: 1
            }
          },
          {
            position: 0.84375,
            color: {
              r: 0.2916666567325592,
              g: 0.2916666567325592,
              b: 0.2916666567325592,
              a: 0.5677083134651184
            }
          },
          {
            position: 1,
            color: {
              r: 0.4375,
              g: 0.4375,
              b: 0.4375,
              a: 0
            }
          }
        ]
      },
      width: 16,
      height: 9
    })), /* @__PURE__ */ figma.widget.h(Frame, {
      name: "red nose",
      x: 8,
      strokeWidth: 0.806,
      overflow: "visible",
      width: 29,
      height: 29
    }, /* @__PURE__ */ figma.widget.h(Ellipse, {
      name: "Ellipse 1",
      fill: {
        type: "gradient-radial",
        gradientHandlePositions: [
          {
            x: 0.5,
            y: 0.5
          },
          {
            x: 0.5,
            y: 1
          },
          {
            x: 0,
            y: 0.5
          }
        ],
        gradientStops: [
          {
            position: 0,
            color: {
              r: 1,
              g: 0,
              b: 0,
              a: 1
            }
          },
          {
            position: 1,
            color: {
              r: 0.6458333134651184,
              g: 0,
              b: 0,
              a: 1
            }
          }
        ]
      },
      strokeWidth: 0.806,
      width: 29,
      height: 29
    }), /* @__PURE__ */ figma.widget.h(Ellipse, {
      name: "Ellipse 2",
      effect: {
        type: "drop-shadow",
        color: "#FFFC",
        offset: {
          x: 1,
          y: 1
        },
        blur: 5.25,
        spread: 0.81,
        showShadowBehindNode: false
      },
      x: 5,
      y: 6,
      fill: "#F9F9F9",
      strokeWidth: 0.806,
      width: 6.444,
      height: 6.444
    }))), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      x: 100,
      y: 260,
      name: "ButtonOrange",
      onClick: () => {
        roll();
      },
      fill: {
        type: "gradient-linear",
        gradientHandlePositions: [
          { x: 0.5, y: 0 },
          { x: 0.5, y: 1 },
          { x: 1, y: 0 }
        ],
        gradientStops: [
          {
            position: 0,
            color: {
              r: 0.21960784494876862,
              g: 0.9372549057006836,
              b: 0.4901960790157318,
              a: 1
            }
          },
          {
            position: 1,
            color: {
              r: 0.06666667014360428,
              g: 0.6000000238418579,
              b: 0.5568627715110779,
              a: 1
            }
          }
        ]
      },
      cornerRadius: 100,
      overflow: "visible",
      spacing: 10,
      padding: {
        vertical: 8,
        horizontal: 24
      }
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "Spin Here",
      fill: "#FFF",
      fontFamily: "Nunito Sans",
      fontSize: 18,
      fontWeight: 700,
      strokeWidth: 0,
      strokeAlign: "inside"
    }, "Spin Here")));
  }
  widget.register(Widget);
})();
