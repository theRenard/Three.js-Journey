varying vec2 vUv;

float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main()
{
    // pattern 3
    // float strength = vUv.x;

    // pattern 4
    // float strength = vUv.y;

    // pattern 5
    // float strength = 1.0 - vUv.y;

    // pattern 6
    // float strength = vUv.y;

    // pattern 7
    // float strength = mod(vUv.y * 10.0, 1.0);

    // pattern 8
    // float strength = mod(vUv.y * 10.0, 1.0);

    // don't use if
    // if (strength < 0.5) {
    //     strength = 0.0;
    // } else {
    //     strength = 1.0;
    // }

    // strength = step(0.5, strength);

    // pattern 9
    // strength = step(0.1, strength);

    // pattern 10
    // float strength = mod(vUv.x * 10.0, 1.0);
    // strength = step(0.1, strength);

    // pattern 11
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength += step(0.8, mod(vUv.y * 10.0, 1.0));

    // pattern 12
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // pattern 13
    // float strength = step(0.4, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // pattern 14
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    // barX *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0));
    // barY *= step(0.4, mod(vUv.y * 10.0, 1.0));

    // float strength = barY + barX;

    // pattern 15
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0));
    // barX *= step(0.8, mod(vUv.y * 10.0  + 0.2, 1.0));

    // float barY = step(0.8, mod(vUv.x * 10.0 + 0.2, 1.0));
    // barY *= step(0.4, mod(vUv.y * 10.0, 1.0));

    // float strength = barY + barX;

    // pattern 16
    // float strength = abs(vUv.x - 0.5);

    // pattern 17
    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // pattern 18
    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // pattern 19
    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // pattern 20
    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // strength *= 1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // pattern 21
    // float strength = floor(vUv.x * 10.0) / 10.0;

    // pattern 22
    // float strength = floor(vUv.x * 10.0) / 10.0 * floor(vUv.y * 10.0) / 10.0;

    // pattern 23
    // float strength = random(vUv);

    // pattern 24
    // vec2 greedUv = vec2(
    //     floor(vUv.x * 10.0) / 10.0,
    //     floor(vUv.y * 10.0) / 10.0
    // );
    // float strength = random(greedUv);

    // pattern 25
    // vec2 greedUv = vec2(
    //     floor(vUv.x * 10.0) / 10.0,
    //     floor((vUv.y + vUv.x) * 10.0) / 10.0
    // );
    // float strength = random(greedUv);

    // pattern 25
    // float strength = length(vUv);

    // pattern 26
    float strength = distance(vUv, vec2(0.5));

    gl_FragColor = vec4(strength, strength, strength, 1.0);
}