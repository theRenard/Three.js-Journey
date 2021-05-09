    uniform mat4 projectionMatrix;
    uniform mat4 viewMatrix;
    uniform mat4 modelMatrix;
    uniform vec2 uFrequency;
    uniform float uTime;

    attribute vec3 position;
    attribute vec2 uv;

    varying vec2 vUv;
    varying float vElevation;

    void main()
    {
      // float a = 1.0;
      // float b = 2.0;
      // float c = a + b;
      // int d = 4;
      // vec2 foo = vec2(0.0); // x, y
      // foo *= 2.0;
      // vec3 foot = vec3(0.0); // x, y, z OR r, g, b

      // vec3 overcharge = vec3(foo, 3.0);

      // vec2 reduce = overcharge.xz; // swizzle

      // vec4 four = vec4(1.0, 2.0, 3.0, 4.0); // w or a as fourth param

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float elevation = sin(modelPosition.x * uFrequency.x + uTime) * 0.1;
    elevation += sin(modelPosition.y * uFrequency.y + uTime) * 0.1;

    modelPosition.z += elevation;

    vElevation = elevation;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

        // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
        gl_Position = projectedPosition;
        vUv = uv;

    }