const { widget } = figma;
const { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text } = widget;

function Widget() {
  return (
    <Frame name="Slot" overflow="visible" width={348} height={244}>
      <Frame
        name="slot frame"
        y={46}
        fill="#000"
        cornerRadius={16}
        overflow="visible"
        width={311}
        height={198}
      >
        <Frame
          name="row frame"
          x={8}
          y={8}
          fill="#000"
          cornerRadius={14}
          width={295}
          height={181}
        >
          <AutoLayout
            name="row 3"
            x={201}
            y={-105}
            fill="#FFF"
            stroke="#A7A7A7"
            strokeWidth={4}
            strokeAlign="outside"
            overflow="visible"
            direction="vertical"
            spacing={19}
            padding={{
              vertical: 13,
              horizontal: 6,
            }}
          >
            <Text name="🐻‍❄️" fill="#FFF" fontFamily="Inter" fontSize={76}>
              🐻‍❄️
            </Text>
            <Text name="🐻" fill="#FFF" fontFamily="Inter" fontSize={76}>
              🐻
            </Text>
            <Text name="🐼" fill="#FFF" fontFamily="Inter" fontSize={76}>
              🐼
            </Text>
          </AutoLayout>
          <AutoLayout
            name="row 2"
            x={103}
            y={-62}
            fill="#FFF"
            stroke="#A7A7A7"
            strokeWidth={4}
            strokeAlign="outside"
            overflow="visible"
            direction="vertical"
            spacing={19}
            padding={{
              vertical: 13,
              horizontal: 6,
            }}
          >
            <Text name="🐻‍❄️" fill="#FFF" fontFamily="Inter" fontSize={76}>
              🐻‍❄️
            </Text>
            <Text name="🐻" fill="#FFF" fontFamily="Inter" fontSize={76}>
              🐻
            </Text>
            <Text name="🐼" fill="#FFF" fontFamily="Inter" fontSize={76}>
              🐼
            </Text>
          </AutoLayout>
          <AutoLayout
            name="row 1"
            x={5}
            y={-90}
            fill="#FFF"
            stroke="#A7A7A7"
            strokeWidth={4}
            strokeAlign="outside"
            overflow="visible"
            direction="vertical"
            spacing={19}
            padding={{
              vertical: 13,
              horizontal: 6,
            }}
          >
            <Text name="🐻‍❄️" fill="#FFF" fontFamily="Inter" fontSize={76}>
              🐻‍❄️
            </Text>
            <Text name="🐻" fill="#FFF" fontFamily="Inter" fontSize={76}>
              🐻
            </Text>
            <Text name="🐼" fill="#FFF" fontFamily="Inter" fontSize={76}>
              🐼
            </Text>
          </AutoLayout>
          <Rectangle
            name="overlay"
            fill={{
              type: "gradient-linear",
              gradientHandlePositions: [
                {
                  x: 0.5,
                  y: 0,
                },
                {
                  x: 0.5,
                  y: 1,
                },
                {
                  x: 1,
                  y: 0,
                },
              ],
              gradientStops: [
                {
                  position: 0,
                  color: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1,
                  },
                },
                {
                  position: 0.5052083134651184,
                  color: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                  },
                },
                {
                  position: 1,
                  color: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1,
                  },
                },
              ],
            }}
            cornerRadius={14}
            width={295}
            height={182}
          />
        </Frame>
        <SVG
          name="arrow"
          x={-18}
          y={83}
          height={46}
          width={31}
          src="<svg width='31' height='46' viewBox='0 0 31 46' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M8.75 5.25493L29.463 23L8.75 40.7451L8.75 5.25493Z' fill='#A7A7A7' fill-opacity='0.69' stroke='url(#paint0_linear_228_33)' stroke-width='2'/>
<defs>
<linearGradient id='paint0_linear_228_33' x1='31' y1='23' x2='9.01987e-07' y2='23' gradientUnits='userSpaceOnUse'>
<stop stop-color='#BCBCBC'/>
<stop offset='1' stop-color='#788480' stop-opacity='0'/>
</linearGradient>
</defs>
</svg>
"
        />
      </Frame>
      <Frame name="handle" x={311} overflow="visible" width={37} height={153}>
        <Frame name="piece 1" y={127} overflow="visible" width={4} height={26}>
          <Rectangle name="Rectangle 10" fill="#232323" width={4} height={26} />
          <Rectangle
            name="Rectangle 9"
            fill={{
              type: "gradient-linear",
              gradientHandlePositions: [
                {
                  x: 0.5,
                  y: 0,
                },
                {
                  x: 0.5,
                  y: 1,
                },
                {
                  x: 1,
                  y: 0,
                },
              ],
              gradientStops: [
                {
                  position: 0,
                  color: {
                    r: 0.9583333134651184,
                    g: 0.9583333134651184,
                    b: 0.9583333134651184,
                    a: 1,
                  },
                },
                {
                  position: 0.84375,
                  color: {
                    r: 0.2916666567325592,
                    g: 0.2916666567325592,
                    b: 0.2916666567325592,
                    a: 0.5677083134651184,
                  },
                },
                {
                  position: 1,
                  color: {
                    r: 0.4375,
                    g: 0.4375,
                    b: 0.4375,
                    a: 0,
                  },
                },
              ],
            }}
            width={4}
            height={26}
          />
        </Frame>
        <Frame
          name="piece 2"
          x={4}
          y={131}
          overflow="visible"
          width={7}
          height={18}
        >
          <Rectangle name="Rectangle 10" fill="#232323" width={7} height={18} />
          <Rectangle
            name="Rectangle 9"
            fill={{
              type: "gradient-linear",
              gradientHandlePositions: [
                {
                  x: 0.5,
                  y: 0,
                },
                {
                  x: 0.5,
                  y: 1,
                },
                {
                  x: 1,
                  y: 0,
                },
              ],
              gradientStops: [
                {
                  position: 0,
                  color: {
                    r: 0.9583333134651184,
                    g: 0.9583333134651184,
                    b: 0.9583333134651184,
                    a: 1,
                  },
                },
                {
                  position: 0.84375,
                  color: {
                    r: 0.2916666567325592,
                    g: 0.2916666567325592,
                    b: 0.2916666567325592,
                    a: 0.5677083134651184,
                  },
                },
                {
                  position: 1,
                  color: {
                    r: 0.4375,
                    g: 0.4375,
                    b: 0.4375,
                    a: 0,
                  },
                },
              ],
            }}
            width={7}
            height={18}
          />
        </Frame>
        <Frame
          name="handle"
          x={19}
          y={25}
          overflow="visible"
          width={8}
          height={120}
        >
          <Rectangle
            name="Rectangle 6"
            x={6}
            fill="#696969"
            width={2}
            height={120}
          />
          <Rectangle
            name="Rectangle 7"
            y={1}
            fill="#FFF6"
            width={6}
            height={119}
          />
          <Rectangle
            name="Rectangle 11"
            y={-1}
            fill={{
              type: "gradient-linear",
              gradientHandlePositions: [
                {
                  x: 1,
                  y: 0.541,
                },
                {
                  x: 0,
                  y: 0.541,
                },
                {
                  x: 1,
                  y: 0.544,
                },
              ],
              gradientStops: [
                {
                  position: 0,
                  color: {
                    r: 0.12916666269302368,
                    g: 0.12916666269302368,
                    b: 0.12916666269302368,
                    a: 1,
                  },
                },
                {
                  position: 1,
                  color: {
                    r: 0.8823529481887817,
                    g: 0.8823529481887817,
                    b: 0.8823529481887817,
                    a: 1,
                  },
                },
              ],
            }}
            width={8}
            height={121}
          />
        </Frame>
        <Frame
          name="long piece"
          x={11}
          y={136}
          overflow="visible"
          width={16}
          height={9}
        >
          <Rectangle name="Rectangle 10" fill="#232323" width={16} height={9} />
          <Rectangle
            name="Rectangle 9"
            fill={{
              type: "gradient-linear",
              gradientHandlePositions: [
                {
                  x: 0.5,
                  y: 0,
                },
                {
                  x: 0.5,
                  y: 1,
                },
                {
                  x: 1,
                  y: 0,
                },
              ],
              gradientStops: [
                {
                  position: 0,
                  color: {
                    r: 0.9583333134651184,
                    g: 0.9583333134651184,
                    b: 0.9583333134651184,
                    a: 1,
                  },
                },
                {
                  position: 0.84375,
                  color: {
                    r: 0.2916666567325592,
                    g: 0.2916666567325592,
                    b: 0.2916666567325592,
                    a: 0.5677083134651184,
                  },
                },
                {
                  position: 1,
                  color: {
                    r: 0.4375,
                    g: 0.4375,
                    b: 0.4375,
                    a: 0,
                  },
                },
              ],
            }}
            width={16}
            height={9}
          />
        </Frame>
        <Frame
          name="red nose"
          x={8}
          strokeWidth={0.806}
          overflow="visible"
          width={29}
          height={29}
        >
          <Ellipse
            name="Ellipse 1"
            fill={{
              type: "gradient-radial",
              gradientHandlePositions: [
                {
                  x: 0.5,
                  y: 0.5,
                },
                {
                  x: 0.5,
                  y: 1,
                },
                {
                  x: 0,
                  y: 0.5,
                },
              ],
              gradientStops: [
                {
                  position: 0,
                  color: {
                    r: 1,
                    g: 0,
                    b: 0,
                    a: 1,
                  },
                },
                {
                  position: 1,
                  color: {
                    r: 0.6458333134651184,
                    g: 0,
                    b: 0,
                    a: 1,
                  },
                },
              ],
            }}
            strokeWidth={0.806}
            width={29}
            height={29}
          />
          <Ellipse
            name="Ellipse 2"
            effect={{
              type: "drop-shadow",
              color: "#FFFC",
              offset: {
                x: 1,
                y: 1,
              },
              blur: 5.25,
              spread: 0.81,
              showShadowBehindNode: false,
            }}
            x={5}
            y={6}
            fill="#F9F9F9"
            strokeWidth={0.806}
            width={6.444}
            height={6.444}
          />
        </Frame>
      </Frame>
    </Frame>
  );
}
widget.register(Widget);
