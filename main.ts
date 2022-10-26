enum Oled {
    //% block=" "
    oled1 = 0,
    //% block=" "
    oled2 = 1,
    //% block=" "
    oled3 = 2,
    //% block=" "
    oled4 = 3,
    //% block=" "
    oled5 = 4,
    //% block=" "
    oled6 = 5,
    //% block=" "
    oled7 = 6,
    //% block=" "
    oled8 = 7,
    //% block=" "
    oled9 = 8,
    //% block=" "
    oled10 = 9,
    //% block=" "
    oled11 = 10,
    //% block=" "
    oled12 = 11,
    //% block=" "
    oled13 = 12,
    //% block=" "
    oled14 = 13,
    //% block=" "
    oled15 = 14,
    //% block=" "
    oled16 = 15,
    //% block=" "
    oled17 = 16,
    //% block=" "
    oled18 = 17,
    //% block=" "
    oled19 = 18,
    //% block=" "
    oled20 = 19,
    //% block=" "
    oled21 = 20,
    //% block=" "
    oled22 = 21,
    //% block=" "
    oled23 = 22,
    //% block=" "
    oled24 = 23,
    //% block=" "
    oled25 = 24,
    //% block=" "
    oled26 = 25,
    //% block=" "
    oled27 = 26,
    //% block=" "
    oled28 = 27,
    //% block=" "
    oled29 = 28,
    //% block=" "
    oled30 = 29,
    //% block=" "
    oled31 = 30,
    //% block=" "
    oled32 = 31,
    //% block=" "
    oled33 = 32,
    //% block=" "
    oled34 = 33,
    //% block=" "
    oled35 = 34,
    //% block=" "
    oled36 = 35,
    //% block=" "
    oled37 = 36,
    //% block=" "
    oled38 = 37,
    //% block=" "
    oled39 = 38,
    //% block=" "
    oled40 = 39,
    //% block=" "
    oled41 = 40,
    //% block=" "
    oled42 = 41,
    //% block=" "
    oled43 = 42,
    //% block=" "
    oled44 = 43,
    //% block=" "
    oled45 = 44,
    //% block=" "
    oled46 = 45,
    //% block=" "
    oled47 = 46,
    //% block=" "
    oled48 = 47,
    //% block=" "
    oled49 = 48,
    //% block=" "
    oled50 = 49,
    //% block=" "
    oled51 = 50,
    //% block=" "
    oled52 = 51,


}
enum Write_pin {
    //% block="P0"
    w0 = 1,
    //% block="P16"
    w1 = 2,
    //% block="P1"
    w2 = 3,
    //% block="P12"
    w3 = 4,
    //% block="P2"
    w4 = 5,
    //% block="P8"
    w5 = 6

}
enum Read_pin {
    //% block="P0"
    r0 = 1,
    //% block="P1"
    r1 = 2,
    //% block="P2"
    r2 = 3

}
enum Ultrasonic_pin {
    //% block="(P0,P13)"
    u1 = 13,
    //% block="(P16,P10)"
    u2 = 1610,
    //% block="(P1,P14)"
    u3 = 114,
    //% block="(P12,P9)"
    u4 = 129,
    //% block="(P2,P15)"
    u5 = 215,
    //% block="(P8,P7)"
    u6 = 87


}
enum PingUnit {
    //% block="厘米"
    Centimeters,
    //% block="微秒"
    MicroSeconds,

    //% block="英寸"
    Inches
}
enum Grayscale_pin {
    //% block="P13"
    g0 = 1,
    //% block="P16"
    g1 = 2,
    //% block="P0"
    g2 = 3,
    //% block="P10"
    g3 = 4,
    //% block="P14"
    g4 = 5,
    //% block="P12"
    g5 = 6,
    //% block="P1"
    g6 = 7,
    //% block="P9"
    g7 = 8,
    //% block="P15"
    g8 = 9,
    //% block="P8"
    g9 = 10,
    //% block="P2"
    g10 = 11,
    //% block="P7"
    g11 = 12
}
enum gs {
    //% block="上"
    g0 = 1,
    //% block="下"
    g1 = 2,
    //% block="左"
    g2 = 3,
    //% block="右"
    g3 = 4

}
enum PINs {
    P0,
    P1,
    P2,
    P3,
    P4,
    P5,
    P6,
    P7,
    P8,
    P9,
    P10,
    P11,
    P12,
    P13,
    P14,
    P15,
    P16,
    P19,
    P20
}
enum TMP36Type {
    //% block="(℃)" enumval=0
    TMP36_temperature_C,

    //% block="(℉)" enumval=1
    TMP36_temperature_F,
}
enum RGB {
    //% block="红"
    RED,
    //% block="绿"
    GREEN,
    //% block="蓝"
    BLUE,
    //% block="全部"
    CLEAR
}
enum NeoPixelColors {
    //% block=红
    Red = 0xFF0000,
    //% block=橙
    Orange = 0xFFA500,
    //% block=黄
    Yellow = 0xFFFF00,
    //% block=绿
    Green = 0x00FF00,
    //% block=蓝
    Blue = 0x0000FF,
    //% block=靛蓝
    Indigo = 0x4b0082,
    //% block=紫罗兰
    Violet = 0x8a2be2,
    //% block=紫
    Purple = 0xFF00FF,
    //% block=白
    White = 0xFFFFFF,
    //% block=黑
    Black = 0x000000
}
enum NeoPixelMode {
    //% block="RGB (GRB 格式)"
    RGB = 1,
    //% block="RGB+W"
    RGBW = 2,
    //% block="RGB (RGB 格式)"
    RGB_RGB = 3
}

namespace Microbit {

    export enum DHT11_state {
        //% block="温度(℃)" enumval=0
        DHT11_temperature_C,

        //% block="湿度(0~100)" enumval=1
        DHT11_humidity,
    }

    export enum Distance_Unit_List {
        //% block="厘米" 
        Distance_Unit_cm,

        //% block="英寸"
        Distance_Unit_inch,
    }

    //% blockId=buttonState
    //% weight=40
    //% buttonpin.fieldEditor="gridpicker"
    //% buttonpin.fieldOptions.width=220
    //% buttonpin.fieldOptions.columns=2
    //% block="按钮传感器 %buttonpin"
    //% subcategory=传感器
    export function buttonState(buttonpin: Write_pin): number {
        let pin16
        if (buttonpin == 1) {

            pin16 = DigitalPin.P0;
        }
        if (buttonpin == 2) {
            pin16 = DigitalPin.P16;
        }
        if (buttonpin == 3) {
            pin16 = DigitalPin.P1;
        }
        if (buttonpin == 4) {

            pin16 = DigitalPin.P12;
        }
        if (buttonpin == 5) {
            pin16 = DigitalPin.P2;
        }
        if (buttonpin == 6) {
            pin16 = DigitalPin.P8;
        }


        return pins.digitalReadPin(pin16);
    }

    //% blockId=hState
    //% weight=39
    //% hallpin.fieldEditor="gridpicker"
    //% hallpin.fieldOptions.width=220
    //% hallpin.fieldOptions.columns=2
    //% block="霍尔传感器 %hallpin"
    //% subcategory=传感器
    export function hState(hallpin: Write_pin): number {
        let pin18
        if (hallpin == 1) {

            pin18 = DigitalPin.P0;
        }
        if (hallpin == 2) {
            pin18 = DigitalPin.P16;
        }
        if (hallpin == 3) {
            pin18 = DigitalPin.P1;
        }
        if (hallpin == 4) {

            pin18 = DigitalPin.P12;
        }
        if (hallpin == 5) {
            pin18 = DigitalPin.P2;
        }
        if (hallpin == 6) {
            pin18 = DigitalPin.P8;
        }

        return pins.digitalReadPin(pin18);
    }

    //% blockId=farState
    //% weight=38
    //% farStatepin.fieldEditor="gridpicker"
    //% farStatepin.fieldOptions.width=220
    //% farStatepin.fieldOptions.columns=2
    //% block="远距离光电传感器 %farStatepin"
    //% subcategory=传感器
    export function farState(farStatepin: Write_pin): number {
        let pin17
        if (farStatepin == 1) {

            pin17 = DigitalPin.P0;
        }
        if (farStatepin == 2) {
            pin17 = DigitalPin.P16;
        }
        if (farStatepin == 3) {
            pin17 = DigitalPin.P1;
        }
        if (farStatepin == 4) {

            pin17 = DigitalPin.P12;
        }
        if (farStatepin == 5) {
            pin17 = DigitalPin.P2;
        }
        if (farStatepin == 6) {
            pin17 = DigitalPin.P8;
        }
        return pins.digitalReadPin(pin17);
    }

    //% blockId=potentiometerRead
    //% weight=37
    //% potentiometerpin.fieldEditor="gridpicker"
    //% potentiometerpin.fieldOptions.width=220
    //% potentiometerpin.fieldOptions.columns=1
    //% block="电位器 %potentiometerpin"
    //% subcategory=传感器
    export function potentiometerRead(potentiometerpin: Read_pin): number {
        let pin15
        if (potentiometerpin == 1) {

            pin15 = AnalogPin.P0;
        }
        if (potentiometerpin == 2) {
            pin15 = AnalogPin.P1;
        }
        if (potentiometerpin == 3) {
            pin15 = AnalogPin.P2;
        }
        return pins.analogReadPin(pin15);
    }

    //% blockId="ReadGrayLevel" block="灰度传感器 %graylevelpin"
    //% weight=36
    //% graylevelpin.fieldEditor="gridpicker"
    //% graylevelpin.fieldOptions.width=220
    //% graylevelpin.fieldOptions.columns=1
    //% subcategory=传感器
    export function ReadGrayLevel(graylevelpin: Read_pin): number {
        let voltage7 = 0;
        let grayLevel = 0;
        let pin13
        if (graylevelpin == 1) {

            pin13 = AnalogPin.P0;
        }
        if (graylevelpin == 2) {
            pin13 = AnalogPin.P1;
        }
        if (graylevelpin == 3) {
            pin13 = AnalogPin.P2;
        }
        voltage7 = pins.map(
            pins.analogReadPin(pin13),
            0,
            1023,
            80,
            1023
        );
        grayLevel = voltage7;
        return Math.round(grayLevel);
    }

    //% blockId="readlightintensity" block="光敏传感器 %lightintensitypin"
    //% weight=35
    //% lightintensitypin.fieldEditor="gridpicker"
    //% lightintensitypin.fieldOptions.width=220
    //% lightintensitypin.fieldOptions.columns=1
    //% subcategory=传感器
    export function ReadLightIntensity(lightintensitypin: Read_pin): number {
        let voltage2 = 0;
        let lightintensity = 0;
        let pin2
        if (lightintensitypin == 1) {
            pin2 = AnalogPin.P0;

        }
        if (lightintensitypin == 2) {
            pin2 = AnalogPin.P1;
        }
        if (lightintensitypin == 3) {
            pin2 = AnalogPin.P2;

        }
        voltage2 = pins.map(
            pins.analogReadPin(pin2),
            0,
            1023,
            0,
            1023
        );
        lightintensity = voltage2;
        return Math.round(1023 - lightintensity);

    }

    //% blockId="Readflame" block="火焰传感器 %flamepin"
    //% weight=34
    //% flamepin.fieldEditor="gridpicker"
    //% flamepin.fieldOptions.width=220
    //% flamepin.fieldOptions.columns=1
    //% subcategory=传感器
    export function Readflame(flamepin: Read_pin): number {
        let voltage6 = 0;
        let flame = 0;
        let pin12
        if (flamepin == 1) {

            pin12 = AnalogPin.P0;
        }
        if (flamepin == 2) {
            pin12 = AnalogPin.P1;
        }
        if (flamepin == 3) {
            pin12 = AnalogPin.P2;
        }
        voltage6 = pins.map(
            pins.analogReadPin(pin12),
            0,
            1023,
            0,
            1023
        );
        flame = voltage6;
        return Math.round(1023 - flame);
    }

    //% blockId="octopus_ReadWaterLevel" block="水位传感器 %waterlevelpin"
    //% weight=33
    //% waterlevelpin.fieldEditor="gridpicker"
    //% waterlevelpin.fieldOptions.width=220
    //% waterlevelpin.fieldOptions.columns=1
    //% subcategory=传感器

    export function ReadWaterLevel(waterlevelpin: Read_pin): number {
        let voltage4 = 0;
        let waterLevel = 0;
        let pin10
        if (waterlevelpin == 1) {

            pin10 = AnalogPin.P0;
        }
        if (waterlevelpin == 2) {
            pin10 = AnalogPin.P1;
        }
        if (waterlevelpin == 3) {
            pin10 = AnalogPin.P2;
        }
        voltage4 = pins.analogReadPin(pin10);
        if (voltage4 > 620) { waterLevel = 100; }
        else if (voltage4 > 618) { waterLevel = 98; }
        else if (voltage4 > 617) { waterLevel = 96; }
        else if (voltage4 > 616) { waterLevel = 94; }
        else if (voltage4 > 614) { waterLevel = 92; }
        else if (voltage4 > 612) { waterLevel = 90; }
        else if (voltage4 > 610) { waterLevel = 88; }
        else if (voltage4 > 609) { waterLevel = 86; }
        else if (voltage4 > 607) { waterLevel = 85; }
        else if (voltage4 > 606) { waterLevel = 83; }
        else if (voltage4 > 605) { waterLevel = 81; }
        else if (voltage4 > 604) { waterLevel = 80; }
        else if (voltage4 > 603) { waterLevel = 78; }
        else if (voltage4 > 602) { waterLevel = 77; }
        else if (voltage4 > 600) { waterLevel = 75; }
        else if (voltage4 > 598) { waterLevel = 73; }
        else if (voltage4 > 596) { waterLevel = 72; }
        else if (voltage4 > 594) { waterLevel = 70; }
        else if (voltage4 > 592) { waterLevel = 68; }
        else if (voltage4 > 590) { waterLevel = 65; }
        else if (voltage4 > 588) { waterLevel = 63; }
        else if (voltage4 > 586) { waterLevel = 62; }
        else if (voltage4 > 583) { waterLevel = 60; }
        else if (voltage4 > 580) { waterLevel = 58; }
        else if (voltage4 > 575) { waterLevel = 56; }
        else if (voltage4 > 574) { waterLevel = 55; }
        else if (voltage4 > 573) { waterLevel = 54; }

        else if (voltage4 > 572) { waterLevel = 53; }
        else if (voltage4 > 570) { waterLevel = 52; }
        else if (voltage4 > 568) { waterLevel = 51; }
        else if (voltage4 > 566) { waterLevel = 50; }
        else if (voltage4 > 563) { waterLevel = 49; }
        else if (voltage4 > 560) { waterLevel = 48; }
        else if (voltage4 > 557) { waterLevel = 47; }
        else if (voltage4 > 554) { waterLevel = 46; }
        else if (voltage4 > 551) { waterLevel = 45; }
        else if (voltage4 > 548) { waterLevel = 44; }
        else if (voltage4 > 545) { waterLevel = 43; }
        else if (voltage4 > 542) { waterLevel = 42; }
        else if (voltage4 > 539) { waterLevel = 41; }
        else if (voltage4 > 536) { waterLevel = 40; }
        else if (voltage4 > 533) { waterLevel = 39; }
        else if (voltage4 > 530) { waterLevel = 38; }
        else if (voltage4 > 527) { waterLevel = 37; }
        else if (voltage4 > 523) { waterLevel = 36; }
        else if (voltage4 > 516) { waterLevel = 35; }
        else if (voltage4 > 510) { waterLevel = 34; }
        else if (voltage4 > 506) { waterLevel = 33; }
        else if (voltage4 > 500) { waterLevel = 32; }
        else if (voltage4 > 497) { waterLevel = 31; }
        else if (voltage4 > 494) { waterLevel = 30; }
        else if (voltage4 > 481) { waterLevel = 29; }
        else if (voltage4 > 478) { waterLevel = 28; }
        else if (voltage4 > 475) { waterLevel = 27; }
        else if (voltage4 > 472) { waterLevel = 26; }
        else if (voltage4 > 469) { waterLevel = 25; }
        else if (voltage4 > 466) { waterLevel = 24; }
        else if (voltage4 > 463) { waterLevel = 23; }
        else if (voltage4 > 460) { waterLevel = 22; }
        else if (voltage4 > 457) { waterLevel = 21; }
        else if (voltage4 > 454) { waterLevel = 19; }
        else if (voltage4 > 451) { waterLevel = 18; }
        else if (voltage4 > 448) { waterLevel = 17; }
        else if (voltage4 > 445) { waterLevel = 16; }
        else if (voltage4 > 442) { waterLevel = 15; }
        else if (voltage4 > 439) { waterLevel = 14; }
        else if (voltage4 > 436) { waterLevel = 13; }
        else if (voltage4 > 433) { waterLevel = 12; }
        else if (voltage4 > 430) { waterLevel = 11; }
        else if (voltage4 > 427) { waterLevel = 10; }
        else if (voltage4 > 424) { waterLevel = 9; }
        else if (voltage4 > 421) { waterLevel = 8; }
        else if (voltage4 > 418) { waterLevel = 7; }
        else if (voltage4 > 415) { waterLevel = 6; }
        else if (voltage4 > 412) { waterLevel = 5; }
        else if (voltage4 > 409) { waterLevel = 4; }
        else if (voltage4 > 406) { waterLevel = 3; }
        else if (voltage4 > 403) { waterLevel = 2; }
        else if (voltage4 > 400) { waterLevel = 1; }
        else { waterLevel = 0; }

        return Math.round(waterLevel);
    }

    //% blockId="ReadGasConcentration" block="可燃气体传感器 %gasconcentrationpin"
    //% weight=32
    //% gasconcentrationpin.fieldEditor="gridpicker"
    //% gasconcentrationpin.fieldOptions.width=220
    //% gasconcentrationpin.fieldOptions.columns=1
    //% subcategory=传感器
    export function ReadGasConcentration(gasconcentrationpin: Read_pin): number {
        let voltage5 = 0;
        let gasConcentration = 0;
        let pin11
        if (gasconcentrationpin == 1) {

            pin11 = AnalogPin.P0;
        }
        if (gasconcentrationpin == 2) {
            pin11 = AnalogPin.P1;
        }
        if (gasconcentrationpin == 3) {
            pin11 = AnalogPin.P2;
        }
        voltage5 = pins.map(
            pins.analogReadPin(pin11),
            0,
            1023,
            0,
            1023
        );
        gasConcentration = voltage5;
        return Math.round(gasConcentration);
    }

    //% blockId="readsoilmoisture" block="土壤湿度传感器 %soilhumiditypin"
    //% weight=31
    //% soilmoisturepin.fieldEditor="gridpicker"
    //% soilmoisturepin.fieldOptions.width=220
    //% soilmoisturepin.fieldOptions.columns=1
    //% subcategory=传感器
    export function ReadSoilHumidity(soilmoisturepin: Read_pin): number {
        let voltage = 0;
        let soilmoisture = 0;
        let pin
        if (soilmoisturepin == 1) {
            pin = AnalogPin.P0;
        }
        if (soilmoisturepin == 2) {
            pin = AnalogPin.P1;
        }
        if (soilmoisturepin == 3) {
            pin = AnalogPin.P2;

        }
        voltage = pins.map(
            pins.analogReadPin(pin),
            0,
            1023,
            0,
            1023
        );
        soilmoisture = voltage;
        return Math.round(soilmoisture);
    }

    //% blockId="readWaterTemp" block="防水温度传感器 %waterproofpin"
    //% weight=30
    //% waterproofpin.fieldEditor="gridpicker"
    //% waterproofpin.fieldOptions.width=220
    //% waterproofpin.fieldOptions.columns=1
    //% subcategory=传感器
    export function readWaterTemp(waterproofpin: Read_pin): number {
        let voltage22 = 0;
        let waterProofTemp = 0;
        let pin14
        if (waterproofpin == 1) {

            pin14 = AnalogPin.P0;
        }
        if (waterproofpin == 2) {
            pin14 = AnalogPin.P1;
        }
        if (waterproofpin == 3) {
            pin14 = AnalogPin.P2;
        }
        voltage22 = pins.analogReadPin(pin14);//%获得原始值
        if (voltage22 > 1001) { waterProofTemp = 100; }
        else if (voltage22 > 1000) { waterProofTemp = 98; }
        else if (voltage22 > 999) { waterProofTemp = 97; }
        else if (voltage22 > 998) { waterProofTemp = 96; }
        else if (voltage22 > 997) { waterProofTemp = 95; }
        else if (voltage22 > 996) { waterProofTemp = 93; }
        else if (voltage22 > 995) { waterProofTemp = 92; }
        else if (voltage22 > 994) { waterProofTemp = 91; }
        else if (voltage22 > 993) { waterProofTemp = 90; }
        else if (voltage22 > 992) { waterProofTemp = 89; }
        else if (voltage22 > 991) { waterProofTemp = 88; }
        else if (voltage22 > 990) { waterProofTemp = 87; }
        else if (voltage22 > 989) { waterProofTemp = 86; }
        else if (voltage22 > 988) { waterProofTemp = 85; }
        else if (voltage22 > 987) { waterProofTemp = 84; }
        else if (voltage22 > 986) { waterProofTemp = 83; }
        else if (voltage22 > 985) { waterProofTemp = 82; }
        else if (voltage22 > 984) { waterProofTemp = 81; }
        else if (voltage22 > 982) { waterProofTemp = 80; }
        else if (voltage22 > 981) { waterProofTemp = 79; }
        else if (voltage22 > 980) { waterProofTemp = 78; }
        else if (voltage22 > 978) { waterProofTemp = 77; }
        else if (voltage22 > 977) { waterProofTemp = 76; }
        else if (voltage22 > 975) { waterProofTemp = 75; }
        else if (voltage22 > 974) { waterProofTemp = 74; }
        else if (voltage22 > 972) { waterProofTemp = 73; }
        else if (voltage22 > 971) { waterProofTemp = 72; }
        else if (voltage22 > 969) { waterProofTemp = 71; }
        else if (voltage22 > 967) { waterProofTemp = 70; }
        else if (voltage22 > 965) { waterProofTemp = 69; }
        else if (voltage22 > 963) { waterProofTemp = 68; }
        else if (voltage22 > 961) { waterProofTemp = 67; }
        else if (voltage22 > 959) { waterProofTemp = 66; }
        else if (voltage22 > 957) { waterProofTemp = 65; }
        else if (voltage22 > 955) { waterProofTemp = 64; }
        else if (voltage22 > 953) { waterProofTemp = 63; }
        else if (voltage22 > 950) { waterProofTemp = 62; }
        else if (voltage22 > 948) { waterProofTemp = 61; }
        else if (voltage22 > 943) { waterProofTemp = 59; }
        else if (voltage22 > 940) { waterProofTemp = 58; }
        else if (voltage22 > 937) { waterProofTemp = 57; }
        else if (voltage22 > 934) { waterProofTemp = 56; }
        else if (voltage22 > 931) { waterProofTemp = 55; }
        else if (voltage22 > 928) { waterProofTemp = 54; }
        else if (voltage22 > 924) { waterProofTemp = 53; }
        else if (voltage22 > 921) { waterProofTemp = 52; }
        else if (voltage22 > 917) { waterProofTemp = 51; }
        else if (voltage22 > 914) { waterProofTemp = 51; }
        else if (voltage22 > 910) { waterProofTemp = 49; }
        else if (voltage22 > 906) { waterProofTemp = 48; }
        else if (voltage22 > 902) { waterProofTemp = 47; }
        else if (voltage22 > 898) { waterProofTemp = 46; }
        else if (voltage22 > 893) { waterProofTemp = 45; }
        else if (voltage22 > 889) { waterProofTemp = 44; }
        else if (voltage22 > 884) { waterProofTemp = 43; }
        else if (voltage22 > 879) { waterProofTemp = 42; }
        else if (voltage22 > 874) { waterProofTemp = 41; }
        else if (voltage22 > 869) { waterProofTemp = 40; }
        else if (voltage22 > 864) { waterProofTemp = 39; }
        else if (voltage22 > 858) { waterProofTemp = 38; }
        else if (voltage22 > 852) { waterProofTemp = 37; }
        else if (voltage22 > 846) { waterProofTemp = 36; }
        else if (voltage22 > 840) { waterProofTemp = 35; }
        else if (voltage22 > 834) { waterProofTemp = 34; }
        else if (voltage22 > 827) { waterProofTemp = 33; }
        else if (voltage22 > 821) { waterProofTemp = 32; }
        else if (voltage22 > 814) { waterProofTemp = 31; }
        else if (voltage22 > 806) { waterProofTemp = 30; }
        else if (voltage22 > 799) { waterProofTemp = 29; }
        else if (voltage22 > 791) { waterProofTemp = 28; }
        else if (voltage22 > 784) { waterProofTemp = 27; }
        else if (voltage22 > 776) { waterProofTemp = 26; }
        else if (voltage22 > 767) { waterProofTemp = 25; }
        else if (voltage22 > 759) { waterProofTemp = 24; }
        else if (voltage22 > 750) { waterProofTemp = 23; }
        else if (voltage22 > 741) { waterProofTemp = 22; }
        else if (voltage22 > 732) { waterProofTemp = 21; }
        else if (voltage22 > 713) { waterProofTemp = 19; }
        else if (voltage22 > 703) { waterProofTemp = 18; }
        else if (voltage22 > 692) { waterProofTemp = 17; }
        else if (voltage22 > 682) { waterProofTemp = 16; }
        else if (voltage22 > 671) { waterProofTemp = 15; }
        else if (voltage22 > 661) { waterProofTemp = 14; }
        else if (voltage22 > 650) { waterProofTemp = 13; }
        else if (voltage22 > 638) { waterProofTemp = 12; }
        else if (voltage22 > 627) { waterProofTemp = 11; }
        else if (voltage22 > 615) { waterProofTemp = 10; }
        else if (voltage22 > 604) { waterProofTemp = 9; }
        else if (voltage22 > 592) { waterProofTemp = 8; }
        else if (voltage22 > 579) { waterProofTemp = 7; }
        else if (voltage22 > 567) { waterProofTemp = 6; }
        else if (voltage22 > 555) { waterProofTemp = 5; }
        else if (voltage22 > 542) { waterProofTemp = 4; }
        else if (voltage22 > 530) { waterProofTemp = 3; }
        else if (voltage22 > 517) { waterProofTemp = 2; }
        else if (voltage22 > 504) { waterProofTemp = 1; }
        else { waterProofTemp = 0; }
        return waterProofTemp;
    }

    /**
    * get Ultrasonic distance
    */
    //% blockId=sonarbit
    //% weight=29

    //% subcategory=传感器
    //% blockId=sonar_ping block="超声波传感器 %ultpins 单位 %unit"
    //% ultpins.fieldEditor="gridpicker"
    //% ultpins.fieldOptions.width=220
    //% ultpins.fieldOptions.columns=2
    export function ping(ultpins: Ultrasonic_pin, unit: PingUnit, maxCmDistance = 500): number {
        // send pulse

        let d
        let distance
        let echopin
        let trigpin
        if (ultpins == 13) {
            trigpin = DigitalPin.P0;
            echopin = DigitalPin.P13;
        }
        if (ultpins == 114) {
            trigpin = DigitalPin.P1;
            echopin = DigitalPin.P14;
        }
        if (ultpins == 215) {
            trigpin = DigitalPin.P2;
            echopin = DigitalPin.P15;
        }
        if (ultpins == 87) {
            trigpin = DigitalPin.P8;
            echopin = DigitalPin.P7;
        }
        if (ultpins == 129) {
            trigpin = DigitalPin.P12;
            echopin = DigitalPin.P9;
        }
        if (ultpins == 1610) {
            trigpin = DigitalPin.P16;
            echopin = DigitalPin.P10;
        }
        pins.setPull(trigpin, PinPullMode.PullNone);
        pins.digitalWritePin(trigpin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trigpin, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trigpin, 0);

        // read pulse
        d = pins.pulseIn(echopin, PulseValue.High, maxCmDistance * 50);
        distance = d * 34 / 2 / 1000 * 3 / 2;
        switch (unit) {
            case PingUnit.Centimeters: return Math.round(distance);
            case PingUnit.Inches: return Math.round(distance / 30.48);
            default: return Math.round(d);
        }
    }


    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=2
    //% subcategory=传感器
    //% blockId="pinpullup" block="巡线传感器 %pin "
    //%weight=28

    export function pinpullup(pin: Grayscale_pin): number {
        let pin33
        if (pin == 1) {

            pin33 = DigitalPin.P13;
        }
        if (pin == 2) {
            pin33 = DigitalPin.P16;
        }
        if (pin == 3) {
            pin33 = DigitalPin.P0;
        }
        if (pin == 4) {

            pin33 = DigitalPin.P10;
        }
        if (pin == 5) {
            pin33 = DigitalPin.P14;
        }
        if (pin == 6) {
            pin33 = DigitalPin.P12;
        }
        if (pin == 7) {

            pin33 = DigitalPin.P1;
        }
        if (pin == 8) {
            pin33 = DigitalPin.P9;
        }
        if (pin == 9) {
            pin33 = DigitalPin.P15;
        }
        if (pin == 10) {

            pin33 = DigitalPin.P8;
        }
        if (pin == 11) {
            pin33 = DigitalPin.P2;
        }
        if (pin == 12) {
            pin33 = DigitalPin.P7;
        }
        return pins.digitalReadPin(pin33);



    }
    ///////////手势识别传感器//////
    let DIR_NONE = 'none'
    let DIR_LEFT = 'left'
    let DIR_RIGHT = 'right'
    let DIR_UP = 'up'
    let DIR_DOWN = 'down'
    let DIR_NEAR = 'near'
    let DIR_FAR = 'far'
    let DIR_ALL = 'all'

    let motion_global: string = ""

    enum states {
        NA_STATE1,
        NEAR_STATE1,
        FAR_STATE1,
        ALL_STATE1
    };

    export enum sl06_mode {

        //% block="手势模式"
        GESTURE_MODE
    };

    export enum gestures {
        //% block="左"
        LEFT,

        //% block="右"
        RIGHT,

        //% block="上"
        UP,

        //% block="下"
        DOWN

    };

    let APDS9960_I2C_ADDR = 0x39;
    let APDS9960_ID_1 = 0xAB
    let APDS9960_ID_2 = 0X9c

    let gesture_data_u_data = pins.createBuffer(32);
    let gesture_data_d_data = pins.createBuffer(32);
    let gesture_data_l_data = pins.createBuffer(32);
    let gesture_data_r_data = pins.createBuffer(32);
    let gesture_data_index: NumberFormat.UInt8BE
    let gesture_data_total_gestures: NumberFormat.UInt8BE;
    let gesture_data_in_threshold: NumberFormat.UInt8BE;
    let gesture_data_out_threshold: NumberFormat.UInt8BE;

    let gesture_ud_delta_ = 0;
    let gesture_lr_delta_ = 0;

    let gesture_ud_count_ = 0;
    let gesture_lr_count_ = 0;

    let gesture_near_count_ = 0;
    let gesture_far_count_ = 0;

    let gesture_state_ = 0;
    let gesture_motion_ = DIR_NONE;


    //%blockId=GestureSensor_begin
    //%block="手势传感器初始化"
    //%advanced=true
    //%group=可选项
    function gesturesensor_begin(): void {
        let id: number
        id = wireReadDataByte(APDS9960_I2C_ADDR)

        /* Set ENABLE register to 0 (disable all features) */
        // ALL, OFF
        setMode(7, 0)

        /* Set default values for ambient light and proximity registers */
        // APDS9960_ATIME, DEFAULT_ATIME
        wireWriteDataByte(0x81, 219)

        // APDS9960_WTIME, DEFAULT_WTIME
        wireWriteDataByte(0x83, 246)

        //APDS9960_PPULSE, DEFAULT_PROX_PPULSE
        wireWriteDataByte(0x8E, 0x87)

        // APDS9960_POFFSET_UR, DEFAULT_POFFSET_UR
        wireWriteDataByte(0x9D, 0)

        // APDS9960_POFFSET_DL, DEFAULT_POFFSET_DL
        wireWriteDataByte(0x9E, 0)

        // APDS9960_CONFIG1, DEFAULT_CONFIG1
        wireWriteDataByte(0x8D, 0x60)

        // APDS9960_PERS, DEFAULT_PERS
        wireWriteDataByte(0x8C, 0x11)

        // APDS9960_CONFIG2, DEFAULT_CONFIG2
        wireWriteDataByte(0x90, 0x01)

        // APDS9960_CONFIG3, DEFAULT_CONFIG3
        wireWriteDataByte(0x9F, 0)

        // DEFAULT_GPENTH
        setGestureEnterThresh(40)

        // DEFAULT_GEXTH
        setGestureExitThresh(30)

        // APDS9960_GCONF1, DEFAULT_GCONF1
        wireWriteDataByte(0xA2, 0x40)

        // DEFAULT_GGAIN
        setGestureGain(2)

        // DEFAULT_GLDRIVE
        setGestureLEDDrive(0)

        // DEFAULT_GWTIME
        setGestureWaitTime(1)

        // APDS9960_GOFFSET_U, DEFAULT_GOFFSET
        wireWriteDataByte(0xA4, 0)

        // APDS9960_GOFFSET_D, DEFAULT_GOFFSET
        wireWriteDataByte(0xA5, 0)

        // APDS9960_GOFFSET_L, DEFAULT_GOFFSET
        wireWriteDataByte(0xA7, 0)

        // APDS9960_GOFFSET_R, DEFAULT_GOFFSET
        wireWriteDataByte(0xA9, 0)

        // APDS9960_GPULSE, DEFAULT_GPULSE
        wireWriteDataByte(0xA6, 0xC9)

        // APDS9960_GCONF3, DEFAULT_GCONF3
        wireWriteDataByte(0xAA, 0)

        // DEFAULT_GIEN
        setGestureIntEnable(0)

    }

    //%blockId=GestureSensor_getMode
    //%block="获取模式"
    //%advanced=true
    //%weight=28
    //%group=可选项
    //% subcategory=传感器
    function getMode(): number {
        let enable_value: number;

        /* Read current ENABLE register */
        // APDS9960_ENABLE
        enable_value = wireReadDataByte(0x80)

        return enable_value;
    }

    //%blockId=GestureSensor_setMode
    //%block="SL06 set mode %mode %enable"
    //%advanced=true
    //%group=可选项
    function setMode(mode: NumberFormat.UInt8BE, enable: NumberFormat.UInt8BE): boolean {
        let reg_val: NumberFormat.UInt8BE;

        /* Read current ENABLE register */
        reg_val = getMode();
        // ERROR value
        if (reg_val == 0xFF) {
            return false;
        }

        /* Change bit(s) in ENABLE register */
        enable = enable & 0x01;
        if (mode >= 0 && mode <= 6) {
            if (enable) {
                reg_val |= (1 << mode);
            }
            else {
                reg_val &= ~(1 << mode);
            }
        }
        // ALL mode
        else if (mode == 7) {
            if (enable) {
                reg_val = 0x7F;
            }
            else {
                reg_val = 0x00;
            }
        }

        /* Write value back to ENABLE register */
        // APDS9960_ENABLE
        wireWriteDataByte(0x80, reg_val)

        return true;
    }


    //%blockId=GestureSensor_enablePower
    //%block=" 启用上电"
    //%group=可选项
    function enablePower() {
        setMode(0, 1)
    }

    //%blockId=GestureSensor_disablePower
    //%block="不允许上电"
    //%group=可选项
    function disbalePower() {
        setMode(0, 0)
    }

    function enableGestureSensor(): void {

        /* Enable gesture mode
           Set ENABLE to 0 (power off)
           Set WTIME to 0xFF
           Set AUX to LED_BOOST_300
           Enable PON, WEN, PEN, GEN in ENABLE 
        */
        resetGestureParameters();

        wireWriteDataByte(0x83, 0xFF)

        //APDS9960_PPULSE, DEFAULT_GESTURE_PPULSE
        wireWriteDataByte(0x8E, 0x89)

        // LED_BOOST_300
        setLEDBoost(3)

        setGestureIntEnable(0)

        setGestureMode(1)

        enablePower()

        // WAIT
        setMode(3, 1)

        // PROXIMITY
        setMode(2, 1)

        // GESTURE
        setMode(6, 1)
    }

    function disableGestureSensor() {
        resetGestureParameters();
        setGestureIntEnable(0)

        setGestureMode(0)

        setMode(6, 0)

    }



    //%blockId=GestureSensor_getGestureLEDDrive
    //%block="设置手势LED指示灯驱动"
    //%advanced=true
    //%group=手势传感器
    function getGestureLEDDrive() {
        let val3: number;

        /* Read value from GCONF2 register */
        // APDS9960_GCONF2
        val3 = wireReadDataByte(0xA3)

        /* Shift and mask out GLDRIVE bits */
        val3 = (val3 >> 3) & 0b00000011;

        return val3;
    }

    //%blockId=GestureSensor_setGestureLEDDrive
    //%block="SL06 set gesture LED drive %drive"
    //%group=手势传感器
    //%advanced=true
    function setGestureLEDDrive(drive: number) {
        let val4: number;

        /* Read value from GCONF2 register */
        // APDS9960_GCONF2
        val4 = wireReadDataByte(0xA3)
        /* Set bits in register to given value */
        drive &= 0b00000011;
        drive = drive << 3;
        val4 &= 0b11100111;
        val4 |= drive;

        /* Write register value back into GCONF2 register */
        // APDS9960_GCONF2
        wireWriteDataByte(0xA3, val4)
            ;
    }

    //%blockId=GestureSensor_getGestureGain
    //%block="SL06 get gesture gain"
    //%advanced=true
    //%group=手势传感器
    function getGestureGain() {
        let val5: number;

        /* Read value from GCONF2 register */
        // APDS9960_GCONF2
        val5 = wireReadDataByte(0xA3)

        /* Shift and mask out GGAIN bits */
        val5 = (val5 >> 5) & 0b00000011;

        return val5;
    }

    //%blockId=GestureSensor_setGestureGain
    //%block="SL06 set gesture gain %gain"
    //%advanced=true
    //%group=手势传感器
    function setGestureGain(gain: number) {
        let val6: number;

        /* Read value from GCONF2 register */
        // APDS9960_GCONF2
        val6 = wireReadDataByte(0xA3)

        /* Set bits in register to given value */
        gain &= 0b00000011;
        gain = gain << 5;
        val6 &= 0b10011111;
        val6 |= gain;

        /* Write register value back into GCONF2 register */
        // APDS9960_GCONF2
        wireWriteDataByte(0xA3, val6)

    }

    //%blockId=GestureSensor_getGestureIntEnable
    //%block="SL06 get gesture int enable"
    //%advanced=true
    //%group=手势传感器
    function getGestureIntEnable() {
        let val7 = 0;

        /* Read value from GCONF4 register */
        // APDS9960_GCONF4
        val7 = wireReadDataByte(0xAB)

        /* Shift and mask out GIEN bit */
        val7 = (val7 >> 1) & 0b00000001;

        return val7;
    }

    //%blockId=GestureSensor_setGestureIntEnable
    //%block="SL06 set gesture int enable %enable"
    //%group=手势传感器
    //%advanced=true
    function setGestureIntEnable(enable: number): void {
        let val8 = 0;

        /* Read value from GCONF4 register */
        // APDS9960_GCONF4
        val8 = wireReadDataByte(0xAB)
        /* Set bits in register to given value */
        enable &= 0b00000001;
        enable = enable << 1;
        val8 &= 0b11111101;
        val8 |= enable;

        /* Write register value back into GCONF4 register */
        // APDS9960_GCONF4
        wireWriteDataByte(0xAB, val8)

    }

    //%blockId=GestureSensor_isGestureAvailable
    //%block="SL06 is gesture available"
    //%group=手势传感器
    function isGestureAvailable() {
        let val9 = 0;

        /* Read value from GSTATUS register */
        // APDS9960_GSTATUS
        val9 = wireReadDataByte(0xAF)

        /* Shift and mask out GVALID bit */
        // APDS9960_GVALID
        val9 &= 0b00000001;

        /* Return true/false based on GVALID bit */
        if (val9 == 1) {
            return true;
        } else {
            return false;
        }
    }

    //%blockId=GestureSensor_readGesture
    //%block="读取手势方向"
    //%group=手势传感器
    //%weight=28
    //% subcategory=传感器
    export function gesture() {
        let fifo_level = 0;
        let bytes_read = 0;
        let gstatus: number;
        let fifo_data: number[] = []
        let motion: string;
        let i: number;
        let mode: number = getMode() & 0b01000001


        /* Make sure that power and gesture is on and data is valid */
        if (!isGestureAvailable() || !(mode)) {
            return;
        }

        /* Keep looping as long as gesture data is valid */
        while (1) {

            /* Wait some time to collect next batch of FIFO data */
            // FIFO_PAUSE_TIME
            basic.pause(30);

            /* Get the contents of the STATUS register. Is data still valid? */
            // APDS9960_GSTATUS
            gstatus = wireReadDataByte(0xAF);

            /* If we have valid data, read in FIFO */
            if ((gstatus & 0b00000001) == 0b00000001) {

                /* Read the current FIFO level */
                // APDS9960_GFLVL
                fifo_level = wireReadDataByte(0xAE)

                /* If there's stuff in the FIFO, read it into our data block */
                if (fifo_level > 0) {
                    //APDS9960_GFIFO_U
                    fifo_data = wireReadDataBlock(0xFC, (fifo_level * 4));

                    bytes_read = fifo_data.length

                    /* If at least 1 set of data, sort the data into U/D/L/R */
                    if (fifo_data.length >= 4) {
                        for (i = 0; i < bytes_read; i += 4) {
                            gesture_data_u_data[gesture_data_index] = fifo_data[i + 0];
                            gesture_data_d_data[gesture_data_index] = fifo_data[i + 1];
                            gesture_data_l_data[gesture_data_index] = fifo_data[i + 2];
                            gesture_data_r_data[gesture_data_index] = fifo_data[i + 3];
                            gesture_data_index++;
                            gesture_data_total_gestures++;
                        }

                        /* Filter and process gesture data. Decode near/far state */
                        if (processGestureData()) {
                            if (decodeGesture()) {
                            }
                        }

                        /* Reset data */
                        gesture_data_index = 0;
                        gesture_data_total_gestures = 0;
                    }
                }
            } else {

                /* Determine best guessed gesture and clean up */
                basic.pause(30);
                decodeGesture();
                motion = gesture_motion_;
                motion_global = gesture_motion_
                resetGestureParameters();

                if (motion == DIR_UP) {
                    control.raiseEvent(5, 5)
                } else if (motion == DIR_DOWN) {
                    control.raiseEvent(5, 6)
                } else if (motion == DIR_RIGHT) {
                    control.raiseEvent(5, 7)
                } else if (motion == DIR_LEFT) {
                    control.raiseEvent(5, 8)
                } else if (motion == DIR_NEAR) {
                    control.raiseEvent(5, 9)
                } else if (motion == DIR_FAR) {
                    control.raiseEvent(5, 10)
                }

                return;

            }
        }

    }

    //%block="手势检测方向 %u"
    //%u.defl=1
    //%weight=28
    //% subcategory=传感器
    //%group=手势传感器
    export function onGesture(u: gestures, handler: () => void) {
        if (u == gestures.LEFT) {
            control.onEvent(5, 8, function () {
                handler()
            })
        }
        if (u == gestures.RIGHT) {
            control.onEvent(5, 7, function () {
                handler()
            })
        }
        if (u == gestures.UP) {
            control.onEvent(5, 5, function () {
                handler()
            })
        }
        if (u == gestures.DOWN) {
            control.onEvent(5, 6, function () {
                handler()
            })
        }

    }

    function decodeGesture(): boolean {
        /* Return if near or far event is detected */
        if (gesture_state_ == states.NEAR_STATE1) {
            gesture_motion_ = DIR_NEAR;
            return true;
        }
        else if (gesture_state_ == states.FAR_STATE1) {
            gesture_motion_ = DIR_FAR;
            return true;
        }

        /* Determine swipe direction */
        if ((gesture_ud_count_ == -1) && (gesture_lr_count_ == 0)) {
            gesture_motion_ = DIR_UP;
        }
        else if ((gesture_ud_count_ == 1) && (gesture_lr_count_ == 0)) {
            gesture_motion_ = DIR_DOWN;
        }
        else if ((gesture_ud_count_ == 0) && (gesture_lr_count_ == 1)) {
            gesture_motion_ = DIR_RIGHT;
        }
        else if ((gesture_ud_count_ == 0) && (gesture_lr_count_ == -1)) {
            gesture_motion_ = DIR_LEFT;
        }
        else if ((gesture_ud_count_ == -1) && (gesture_lr_count_ == 1)) {
            if (Math.abs(gesture_ud_delta_) > Math.abs(gesture_lr_delta_)) {
                gesture_motion_ = DIR_UP;
            }
            else {
                gesture_motion_ = DIR_RIGHT;
            }
        }
        else if ((gesture_ud_count_ == 1) && (gesture_lr_count_ == -1)) {
            if (Math.abs(gesture_ud_delta_) > Math.abs(gesture_lr_delta_)) {
                gesture_motion_ = DIR_DOWN;
            }
            else {
                gesture_motion_ = DIR_LEFT;
            }
        }
        else if ((gesture_ud_count_ == -1) && (gesture_lr_count_ == -1)) {
            if (Math.abs(gesture_ud_delta_) > Math.abs(gesture_lr_delta_)) {
                gesture_motion_ = DIR_UP;
            }
            else {
                gesture_motion_ = DIR_LEFT;
            }
        }
        else if ((gesture_ud_count_ == 1) && (gesture_lr_count_ == 1)) {
            if (Math.abs(gesture_ud_delta_) > Math.abs(gesture_lr_delta_)) {
                gesture_motion_ = DIR_DOWN;
            }
            else {
                gesture_motion_ = DIR_RIGHT;
            }
        }
        else {
            return false;
        }

        return true;
    }


    function processGestureData(): boolean {
        let u_first = 0;
        let d_first = 0;
        let l_first = 0;
        let r_first = 0;
        let u_last = 0;
        let d_last = 0;
        let l_last = 0;
        let r_last = 0;
        let ud_ratio_first = 0;
        let lr_ratio_first = 0;
        let ud_ratio_last = 0;
        let lr_ratio_last = 0;
        let ud_delta = 0;
        let lr_delta = 0;
        let j = 0;

        /* If we have less than 4 total gestures, that's not enough */
        if (gesture_data_total_gestures <= 4) {
            return false;
        }

        /* Check to make sure our data isn't out of bounds */
        if ((gesture_data_total_gestures <= 32) &&
            (gesture_data_total_gestures > 0)) {

            /* Find the first value in U/D/L/R above the threshold */
            for (j = 0; j < gesture_data_total_gestures; j++) {
                // GESTURE_THRESHOLD_OUT
                if ((gesture_data_u_data[j] > 10) &&
                    (gesture_data_d_data[j] > 10) &&
                    (gesture_data_l_data[j] > 10) &&
                    (gesture_data_r_data[j] > 10)) {

                    u_first = gesture_data_u_data[j];
                    d_first = gesture_data_d_data[j];
                    l_first = gesture_data_l_data[j];
                    r_first = gesture_data_r_data[j];
                    break;
                }
            }

            /* If one of the _first values is 0, then there is no good data */
            if ((u_first == 0) || (d_first == 0) ||
                (l_first == 0) || (r_first == 0)) {

                return false;
            }
            /* Find the last value in U/D/L/R above the threshold */
            for (j = gesture_data_total_gestures - 1; j >= 0; j--) {

                if ((gesture_data_u_data[j] > 10) &&
                    (gesture_data_d_data[j] > 10) &&
                    (gesture_data_l_data[j] > 10) &&
                    (gesture_data_r_data[j] > 10)) {

                    u_last = gesture_data_u_data[j];
                    d_last = gesture_data_d_data[j];
                    l_last = gesture_data_l_data[j];
                    r_last = gesture_data_r_data[j];
                    break;
                }
            }
        }

        /* Calculate the first vs. last ratio of up/down and left/right */
        ud_ratio_first = ((u_first - d_first) * 100) / (u_first + d_first);
        lr_ratio_first = ((l_first - r_first) * 100) / (l_first + r_first);
        ud_ratio_last = ((u_last - d_last) * 100) / (u_last + d_last);
        lr_ratio_last = ((l_last - r_last) * 100) / (l_last + r_last);

        /* Determine the difference between the first and last ratios */
        ud_delta = ud_ratio_last - ud_ratio_first;
        lr_delta = lr_ratio_last - lr_ratio_first;

        /* Accumulate the UD and LR delta values */
        gesture_ud_delta_ += ud_delta;
        gesture_lr_delta_ += lr_delta;

        /* Determine U/D gesture */
        // GESTURE_SENSITIVITY_1
        if (gesture_ud_delta_ >= 50) {
            gesture_ud_count_ = 1;
        }
        else if (gesture_ud_delta_ <= -50) {
            gesture_ud_count_ = -1;
        }
        else {
            gesture_ud_count_ = 0;
        }

        /* Determine L/R gesture */
        if (gesture_lr_delta_ >= 50) {
            gesture_lr_count_ = 1;
        }
        else if (gesture_lr_delta_ <= -50) {
            gesture_lr_count_ = -1;
        }
        else {
            gesture_lr_count_ = 0;
        }

        /* Determine Near/Far gesture */
        if ((gesture_ud_count_ == 0) && (gesture_lr_count_ == 0)) {
            // GESTURE_SENSITIVITY_2
            if ((Math.abs(ud_delta) < 20) &&
                (Math.abs(lr_delta) < 20)) {

                if ((ud_delta == 0) && (lr_delta == 0)) {
                    gesture_near_count_++;
                }
                else if ((ud_delta != 0) || (lr_delta != 0)) {
                    gesture_far_count_++;
                }

                if ((gesture_near_count_ >= 10) && (gesture_far_count_ >= 2)) {
                    if ((ud_delta == 0) && (lr_delta == 0)) {
                        gesture_state_ = states.NEAR_STATE1;
                    }
                    else if ((ud_delta != 0) && (lr_delta != 0)) {
                        gesture_state_ = states.FAR_STATE1;
                    }
                    return true;
                }
            }
        }
        else {
            // GESTURE_SENSITIVITY_2
            if ((Math.abs(ud_delta) < 20) &&
                (Math.abs(lr_delta) < 20)) {

                if ((ud_delta == 0) && (lr_delta == 0)) {
                    gesture_near_count_++;
                }

                if (gesture_near_count_ >= 10) {
                    gesture_ud_count_ = 0;
                    gesture_lr_count_ = 0;
                    gesture_ud_delta_ = 0;
                    gesture_lr_delta_ = 0;
                }
            }
        }
        return false;
    }

    //%blockId=GestureSensor_enabler
    //%block="设置读取模式 %u"
    //%u.defl=1
    //%interrupts.defl=false
    //%group=手势传感器
    //%weight=28
    //% subcategory=传感器
    export function enable_mode(u: sl06_mode): void {
        if (u == sl06_mode.GESTURE_MODE) {


            enableGestureSensor()
        }
    }


    function setGestureEnterThresh(threshold: number): void {
        // APDS9960_GPENTH
        wireWriteDataByte(0xA0, threshold)

    }

    function setGestureExitThresh(threshold: number): void {
        // APDS9960_GEXTH
        wireWriteDataByte(0xA1, threshold)

    }

    function setGestureWaitTime(time: number) {
        let val20: number;

        /* Read value from GCONF2 register */
        // APDS9960_GCONF2
        val20 = wireReadDataByte(0xA3)

        /* Set bits in register to given value */
        time &= 0b00000111;
        val20 &= 0b11111000;
        val20 |= time;

        /* Write register value back into GCONF2 register */
        // APDS9960_GCONF2
        wireWriteDataByte(0xA3, val20)
    }

    function setLEDBoost(boost: number) {
        let val21: number;

        /* Read value from CONFIG2 register */
        // APDS9960_CONFIG2
        val21 = wireReadDataByte(0x90)

        /* Set bits in register to given value */
        boost &= 0b00000011;
        boost = boost << 4;
        val21 &= 0b11001111;
        val21 |= boost;

        /* Write register value back into CONFIG2 register */
        // APDS9960_CONFIG2
        wireWriteDataByte(0x90, val21)
    }

    function setGestureMode(mode: number) {
        let val22: number;

        /* Read value from GCONF4 register */
        // APDS9960_GCONF4
        val22 = wireReadDataByte(0xAB)

        /* Set bits in register to given value */
        mode &= 0b00000001;
        val22 &= 0b11111110;
        val22 |= mode;

        /* Write register value back into GCONF4 register */
        // APDS9960_GCONF4
        wireWriteDataByte(0xAB, val22);
    }

    function resetGestureParameters() {
        gesture_data_index = 0;
        gesture_data_total_gestures = 0;

        gesture_ud_delta_ = 0;
        gesture_lr_delta_ = 0;

        gesture_ud_count_ = 0;
        gesture_lr_count_ = 0;

        gesture_near_count_ = 0;
        gesture_far_count_ = 0;

        gesture_state_ = 0;
        gesture_motion_ = DIR_NONE;
    }

    function setAmbientLightIntEnable(enable: number): void {
        let val23: number;

        /* Read value from ENABLE register */
        // APDS9960_ENABLE
        val23 = wireReadDataByte(0x80)

        /* Set bits in register to given value */
        enable &= 0b00000001;
        enable = enable << 4;
        val23 &= 0b11101111;
        val23 |= enable;

        /* Write register value back into ENABLE register */
        // APDS9960_ENABLE
        wireWriteDataByte(0x80, val23)
    }


    function wireWriteByte(val: NumberFormat.UInt8BE): boolean {
        pins.i2cWriteNumber(APDS9960_I2C_ADDR, val, NumberFormat.UInt8BE)
        return true;
    }

    function wireWriteDataByte(reg: number, val: number): boolean {
        let buf = pins.createBuffer(2)
        buf[0] = reg;
        buf[1] = val;
        pins.i2cWriteBuffer(APDS9960_I2C_ADDR, buf)
        return true;
    }


    function wireReadDataByte(reg: number): number {
        pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
        let val24: number = pins.i2cReadNumber(APDS9960_I2C_ADDR, NumberFormat.UInt8BE)
        return val24
    }

    function wireReadDataBlock(reg: NumberFormat.UInt8BE, len: number): number[] {
        let buff: number[] = []

        pins.i2cWriteNumber(APDS9960_I2C_ADDR, reg, NumberFormat.UInt8BE);
        for (let k = 0; k < len; k++) {
            buff[k] = pins.i2cReadNumber(APDS9960_I2C_ADDR, NumberFormat.UInt8BE)
        }


        return buff
    }


    gesturesensor_begin();

    //////人体红外/////
    //% weight=27
    //% pirpin.fieldEditor="gridpicker"
    //% pirpin.fieldOptions.width=220
    //% pirpin.fieldOptions.columns=2
    //% blockId="PIR" block="人体红外传感器 %pirpin 检测到运动"

    //% subcategory=传感器 
    export function pir(pirpin: Write_pin): boolean {
        let pin48
        if (pirpin == 1) {

            pin48 = DigitalPin.P0;
        }
        if (pirpin == 2) {
            pin48 = DigitalPin.P16;
        }
        if (pirpin == 3) {
            pin48 = DigitalPin.P1;
        }
        if (pirpin == 4) {

            pin48 = DigitalPin.P12;
        }
        if (pirpin == 5) {
            pin48 = DigitalPin.P2;
        }
        if (pirpin == 6) {
            pin48 = DigitalPin.P8;
        }

        if (pins.digitalReadPin(pin48) == 1) {
            return true
        }
        else {
            return false
        }
    }

        /////////心率血氧/////////////////







    // Functions for reading Particle from the gatorParticle in Particle or straight adv value
	
	/**
	* Initializes the gator:particle sensor, must be called on power up
	*/	
	//% weight=30 
	//% blockId="gatorParticle_begin" 
	//% block="心率血氧模块初始化"
    //% subcategory=传感器
    //%group=心率血氧传感器
	//% shim=Microbit::begin
	export function begin(){
		return
	}
		
	/**
	* Reads either the Red or Infrared detection channels
	*/
	//% weight=29 
	//% blockId="gatorParticle_color" 
	//% block="读取%LEDToRead的值"
    //% subcategory=传感器
    //%group=心率血氧传感器
	//% shim=Microbit::color
	export function color(type: LEDToRead): number{
		return 0
	}
	
	/**
	* Set which LED's we want the sensor to update and read.
	*/	
	//% weight=28
	//% blockId="gatorParticle_setReadMode"
	//% block="set LED mode to read %LEDMode"
	//% shim=Microbit::setReadMode
	//% advanced=false
	export function setReadMode(mode: LEDMode)
	{
		return
	}

	/**
	* Set the amplitude of either Red or Infrared LED
	*/	
	//% weight=27
	//% blockId="gatorParticle_setAmplitude"
	//% block="change strength of %LEDToRead | to %myBrightness"
	//% shim=Microbit::setAmplitude
	//% advanced=false
	export function setAmplitude(led: LEDToRead, myBrightness: number)
	{
		return
	}
	
	/**
	* Grab the heartbeat from the sensor in either beats per minute, or an average of the last 4 BPM readings.
	*/
	//% weight=26
	//% blockId="gatorParticle_heartbeat"
	//% block="以 %HeartbeatType模式读取心率"
    //%group=心率血氧传感器
    //% subcategory=传感器
	//% shim=Microbit::heartbeat
	export function heartbeat(type: HeartbeatType): number
	{
		return 0
	}



    /////////摇杆////////////////////


    //% block="摇杆%rocpin方向为%gs"
    //% weight=27
    //% rocpin.fieldEditor="gridpicker"
    //% rocpin.fieldOptions.width=220
    //% rocpin.fieldOptions.columns=2
    //% subcategory=传感器 
    export function rocker(rocpin: Ultrasonic_pin, gs: gs): boolean {
        let pin58
        let zy
        let sx
        let z
        let s
        let re

        if (rocpin == 13) {
            sx = DigitalPin.P0;
            zy = DigitalPin.P13;
        }
        if (rocpin == 114) {
            sx = DigitalPin.P1;
            zy = DigitalPin.P14;
        }
        if (rocpin == 215) {
            sx = DigitalPin.P2;
            zy = DigitalPin.P15;
        }
        if (rocpin == 87) {
            sx = DigitalPin.P8;
            zy = DigitalPin.P7;
        }
        if (rocpin == 129) {
            sx = DigitalPin.P12;
            zy = DigitalPin.P9;
        }
        if (rocpin == 1610) {
            sx = DigitalPin.P16;
            zy = DigitalPin.P10;
        }
        z = pins.digitalReadPin(zy);
        s = pins.digitalReadPin(sx);

        if (gs == 1) {
            if (s == 1) {
                re = true
            }
            else {
                re = false
            }
        }
        if (gs == 2) {
            if (s == 0) {
                re = true
            }
            else {
                re = false
            }
        }
        if (gs == 3) {
            if (z == 1) {
                re = true
            }
            else {
                re = false
            }
        }
        if (gs == 4) {
            if (z == 0) {
                re = true
            }
            else {
                re = false
            }
        }


        return re

    }






    ////////////////执行器/////////////////////////////////////





    const PCA9685_ADD = 0x40
    const MODE1 = 0x00
    const LED0_ON_L = 0x06
    const PRESCALE = 0xFE
    let initialized = false
    export enum enPos {
        //% blockId="forward" block="前进"
        forward = 1,
        //% blockId="stop" block="后退"
        stop = 2
    }

    export enum enServo {

        S2 = 0,
        S3 = 0,
        S1 = 0,
        S4 = 0
    }

    export enum enMotors {

        M2 = 10,
        M3 = 12,
        M1 = 8,
        M4 = 14
    }

    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2cread(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }

    function initPCA9685(): void {
        i2cwrite(PCA9685_ADD, MODE1, 0x00)
        setFreq(50);
    }

    function setFreq(freq: number): void {
        // Constrain the frequency
        let prescaleval = 25000000;
        prescaleval /= 4096;
        prescaleval /= freq;
        prescaleval -= 1;
        let prescale = prescaleval; //Math.Floor(prescaleval + 0.5);
        let oldmode = i2cread(PCA9685_ADD, MODE1);
        let newmode = (oldmode & 0x7F) | 0x10; // sleep
        i2cwrite(PCA9685_ADD, MODE1, newmode); // go to sleep
        i2cwrite(PCA9685_ADD, PRESCALE, prescale); // set the prescaler
        i2cwrite(PCA9685_ADD, MODE1, oldmode);
        control.waitMicros(5000);
        i2cwrite(PCA9685_ADD, MODE1, oldmode | 0xa1);
    }

    function setPwm(channel: number, on: number, off: number): void {
        if (channel < 0 || channel > 15)
            return;
        if (!initialized) {
            initPCA9685();
        }
        let buf2 = pins.createBuffer(5);
        buf2[0] = LED0_ON_L + 4 * channel;
        buf2[1] = on & 0xff;
        buf2[2] = (on >> 8) & 0xff;
        buf2[3] = off & 0xff;
        buf2[4] = (off >> 8) & 0xff;
        pins.i2cWriteBuffer(PCA9685_ADD, buf2);
    }

    //% blockId=SuperBit_MotorRun 
    //% weight=27
    //% index.fieldEditor="gridpicker"
    //% index.fieldOptions.width=220
    //% index.fieldOptions.columns=2
    //% block="电机|%index|速度(-255~255) %speed"
    //% speed.min=-255 speed.max=255
    //% subcategory=执行器
    export function MotorRun(index: enMotors, speed: number): void {
        if (!initialized) {
            initPCA9685()
        }
        speed = speed * 16; // map 255 to 4096
        if (speed >= 4096) {
            speed = 4095
        }
        if (speed <= -4096) {
            speed = -4095
        }

        let a = index
        let b = index + 1

        if (a > 10) {
            if (speed >= 0) {
                setPwm(a, 0, speed)
                setPwm(b, 0, 0)
            } else {
                setPwm(a, 0, 0)
                setPwm(b, 0, -speed)
            }
        }
        else {
            if (speed >= 0) {
                setPwm(b, 0, speed)
                setPwm(a, 0, 0)
            } else {
                setPwm(b, 0, 0)
                setPwm(a, 0, -speed)
            }
        }
    }


    //% blockId=SuperBit_Servo4
    //% weight=26
    //% num.fieldEditor="gridpicker"
    //% num.fieldOptions.width=220
    //% num.fieldOptions.columns=2
    //% block="舵机| %num|角度 %value"
    //% num.min=1 num.max=4 value.min=0 value.max=300
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
    //% subcategory=执行器
    export function Servo4(num: enServo, value: number): void {

        // 50hz: 20,000 us
        let us = (value * 1800 * 0.6 / 180 + 600); // 0.6 ~ 2.4
        let pwm = us * 4096 / 20000;
        setPwm(num, 0, pwm);

    }


    //% blockId="laser_controller" block="激光 %laserpin 切换至 %laserState || 激光 %intensity"
    //% laserState.shadow="toggleOnOff"
    //% weight=25
    //% laserpin.fieldEditor="gridpicker"
    //% laserpin.fieldOptions.width=220
    //% laserpin.fieldOptions.columns=2
    //% intensity.min=0 intensity.max=1023
    //% expandableArgumentMode="toggle"
    //% subcategory=执行器
    export function laserController(laserpin: Write_pin, laserState: boolean, intensity: number = 1023): void {
        let pin9
        if (laserpin == 1) {

            pin9 = AnalogPin.P0;
        }
        if (laserpin == 2) {
            pin9 = AnalogPin.P16;
        }
        if (laserpin == 3) {
            pin9 = AnalogPin.P1;
        }
        if (laserpin == 4) {

            pin9 = AnalogPin.P12;
        }
        if (laserpin == 5) {
            pin9 = AnalogPin.P2;
        }
        if (laserpin == 6) {
            pin9 = AnalogPin.P8;
        }
        if (laserState) {
            pins.analogSetPeriod(pin9, 1023);
            pins.analogWritePin(pin9, Math.map(intensity, 0, 1023, 0, 1023));
        }
        else {
            pins.analogWritePin(pin9, 0);
            intensity = 0;
        }
    }

    /**
    * toggle fans
    */
    //% blockId=fans block="风扇 %fanpin 切换至 $fanstate || 速度 %speed"
    //% fanstate.shadow="toggleOnOff"
    //% weight=24
    //% fanpin.fieldEditor="gridpicker"
    //% fanpin.fieldOptions.width=220
    //% fanpin.fieldOptions.columns=2
    //% speed.min=0 speed.max=1023
    //% expandableArgumentMode="toggle"
    //% subcategory=执行器
    export function motorFan(fanpin: Write_pin, fanstate: boolean, speed: number = 1023): void {
        let pin3
        if (fanpin == 1) {

            pin3 = AnalogPin.P0;
        }
        if (fanpin == 2) {
            pin3 = AnalogPin.P16;
        }
        if (fanpin == 3) {
            pin3 = AnalogPin.P1;
        }
        if (fanpin == 4) {

            pin3 = AnalogPin.P12;
        }
        if (fanpin == 5) {
            pin3 = AnalogPin.P2;
        }
        if (fanpin == 6) {
            pin3 = AnalogPin.P8;
        }
        if (fanstate) {
            pins.analogSetPeriod(pin3, 1023);
            pins.analogWritePin(pin3, Math.map(speed, 0, 1023, 0, 1023));
        }
        else {
            pins.analogWritePin(pin3, 0);
            speed = 0;
        }

    }

    //% blockId="elecmagnet" block="电磁铁 %elecpin 切换至 %magState || 磁力 %force"
    //% magState.shadow="toggleOnOff"
    //% weight=23
    //% elecpin.fieldEditor="gridpicker"
    //% elecpin.fieldOptions.width=220
    //% elecpin.fieldOptions.columns=2
    //% force.min=0 force.max=1023
    //% expandableArgumentMode="toggle"
    //% subcategory=执行器
    export function elecmagnet(elecpin: Write_pin, magState: boolean, force: number = 1023): void {
        let pin8
        if (elecpin == 1) {

            pin8 = AnalogPin.P0;
        }
        if (elecpin == 2) {
            pin8 = AnalogPin.P16;
        }
        if (elecpin == 3) {
            pin8 = AnalogPin.P1;
        }
        if (elecpin == 4) {

            pin8 = AnalogPin.P12;
        }
        if (elecpin == 5) {
            pin8 = AnalogPin.P2;
        }
        if (elecpin == 6) {
            pin8 = AnalogPin.P8;
        }

        if (magState == true) {
            pins.analogSetPeriod(pin8, 1023)
            pins.analogWritePin(pin8, Math.map(force, 0, 1023, 0, 1023))
        }
        else {
            pins.analogWritePin(pin8, 0)
            force = 0
        }
    }

    /**
    * toggle led
    */
    //% blockId=LEDR block="红色 LED %ledpin 切换到 $ledstate || 亮度 %brightness"
    //% brightness.min=0 brightness.max=1023
    //% ledstate.shadow="toggleOnOff"
    //% weight=22
    //% ledpin.fieldEditor="gridpicker"
    //% ledpin.fieldOptions.width=220
    //% ledpin.fieldOptions.columns=2
    //% expandableArgumentMode="toggle"
    //% subcategory=执行器
    export function ledRBrightness(ledpin: Write_pin, ledstate: boolean, brightness: number = 1023): void {
        let pin4
        if (ledpin == 1) {

            pin4 = AnalogPin.P0;
        }
        if (ledpin == 2) {
            pin4 = AnalogPin.P16;
        }
        if (ledpin == 3) {
            pin4 = AnalogPin.P1;
        }
        if (ledpin == 4) {

            pin4 = AnalogPin.P12;
        }
        if (ledpin == 5) {
            pin4 = AnalogPin.P2;
        }
        if (ledpin == 6) {
            pin4 = AnalogPin.P8;
        }
        if (ledstate) {
            pins.analogSetPeriod(pin4, 1023);
            pins.analogWritePin(pin4, Math.map(brightness, 1023, 0, 0, 1023));
        }
        else {
            pins.analogWritePin(pin4, 1023);
            brightness = 1023;
        }
    }

    /**
    * toggle led
    */
    //% blockId=LEDY block="黄色 LED %ledpin 切换到 $ledstate || 亮度 %brightness"
    //% brightness.min=0 brightness.max=1023
    //% ledstate.shadow="toggleOnOff"
    //% weight=21
    //% ledpin.fieldEditor="gridpicker"
    //% ledpin.fieldOptions.width=220
    //% ledpin.fieldOptions.columns=2
    //% expandableArgumentMode="toggle"
    //% subcategory=执行器
    export function ledYBrightness(ledpin: Write_pin, ledstate: boolean, brightness: number = 1023): void {
        let pin7

        if (ledpin == 1) {

            pin7 = AnalogPin.P0;
        }
        if (ledpin == 2) {
            pin7 = AnalogPin.P16;
        }
        if (ledpin == 3) {
            pin7 = AnalogPin.P1;
        }
        if (ledpin == 4) {

            pin7 = AnalogPin.P12;
        }
        if (ledpin == 5) {
            pin7 = AnalogPin.P2;
        }
        if (ledpin == 6) {
            pin7 = AnalogPin.P8;
        }
        if (ledstate) {
            pins.analogSetPeriod(pin7, 1023);
            pins.analogWritePin(pin7, Math.map(brightness, 1023, 0, 0, 1023));
        }
        else {
            pins.analogWritePin(pin7, 1023);
            brightness = 1023;
        }
    }

    /**
    * toggle led
    */
    //% blockId=LEDG block="绿色 LED %pin 切换到 $ledstate || 亮度 %brightness"
    //% brightness.min=0 brightness.max=1023
    //% ledstate.shadow="toggleOnOff"
    //% weight=20
    //% ledpin.fieldEditor="gridpicker"
    //% ledpin.fieldOptions.width=220
    //% ledpin.fieldOptions.columns=2
    //% expandableArgumentMode="toggle"
    //% subcategory=执行器
    export function ledGBrightness(ledpin: Write_pin, ledstate: boolean, brightness: number = 1023): void {
        let pin5

        if (ledpin == 1) {

            pin5 = AnalogPin.P0;
        }
        if (ledpin == 2) {
            pin5 = AnalogPin.P16;
        }
        if (ledpin == 3) {
            pin5 = AnalogPin.P1;
        }
        if (ledpin == 4) {

            pin5 = AnalogPin.P12;
        }
        if (ledpin == 5) {
            pin5 = AnalogPin.P2;
        }
        if (ledpin == 6) {
            pin5 = AnalogPin.P8;
        }
        if (ledstate) {
            pins.analogSetPeriod(pin5, 1023);
            pins.analogWritePin(pin5, Math.map(brightness, 1023, 0, 0, 1023));
        }
        else {
            pins.analogWritePin(pin5, 1023);
            brightness = 1023;
        }
    }

    /**
    * toggle led
    */
    //% blockId=LEDB block="蓝色 LED %ledpin 切换到 $ledstate || 亮度 %brightness"
    //% brightness.min=0 brightness.max=1023
    //% ledstate.shadow="toggleOnOff"
    //% weight=19
    //% ledpin.fieldEditor="gridpicker"
    //% ledpin.fieldOptions.width=220
    //% ledpin.fieldOptions.columns=2
    //% expandableArgumentMode="toggle"
    //% subcategory=执行器
    export function ledBBrightness(ledpin: Write_pin, ledstate: boolean, brightness: number = 1023): void {
        let pin6
        if (ledpin == 1) {

            pin6 = AnalogPin.P0;
        }
        if (ledpin == 2) {
            pin6 = AnalogPin.P16;
        }
        if (ledpin == 3) {
            pin6 = AnalogPin.P1;
        }
        if (ledpin == 4) {

            pin6 = AnalogPin.P12;
        }
        if (ledpin == 5) {
            pin6 = AnalogPin.P2;
        }
        if (ledpin == 6) {
            pin6 = AnalogPin.P8;
        }
        if (ledstate) {
            pins.analogSetPeriod(pin6, 1023);
            pins.analogWritePin(pin6, Math.map(brightness, 1023, 0, 0, 1023));
        }
        else {
            pins.analogWritePin(pin6, 1023);
            brightness = 1023;
        }
    }






    enum LCS_Constants {
        // Constants
        ADDRESS = 0x29,
        ID = 0x12, // Register should be equal to 0x44 for the TCS34721 or TCS34725, or 0x4D for the TCS34723 or TCS34727.

        COMMAND_BIT = 0x80,

        ENABLE = 0x00,
        ENABLE_AIEN = 0x10, // RGBC Interrupt Enable
        ENABLE_WEN = 0x08, // Wait enable - Writing 1 activates the wait timer
        ENABLE_AEN = 0x02, // RGBC Enable - Writing 1 actives the ADC, 0 disables it
        ENABLE_PON = 0x01, // Power on - Writing 1 activates the internal oscillator, 0 disables it
        ATIME = 0x01, // Integration time
        WTIME = 0x03, // Wait time (if ENABLE_WEN is asserted)
        AILTL = 0x04, // Clear channel lower interrupt threshold
        AILTH = 0x05,
        AIHTL = 0x06, // Clear channel upper interrupt threshold
        AIHTH = 0x07,
        PERS = 0x0C, // Persistence register - basic SW filtering mechanism for interrupts
        PERS_NONE = 0x00, // Every RGBC cycle generates an interrupt
        PERS_1_CYCLE = 0x01, // 1 clean channel value outside threshold range generates an interrupt
        PERS_2_CYCLE = 0x02, // 2 clean channel values outside threshold range generates an interrupt
        PERS_3_CYCLE = 0x03, // 3 clean channel values outside threshold range generates an interrupt
        PERS_5_CYCLE = 0x04, // 5 clean channel values outside threshold range generates an interrupt
        PERS_10_CYCLE = 0x05, // 10 clean channel values outside threshold range generates an interrupt
        PERS_15_CYCLE = 0x06, // 15 clean channel values outside threshold range generates an interrupt
        PERS_20_CYCLE = 0x07, // 20 clean channel values outside threshold range generates an interrupt
        PERS_25_CYCLE = 0x08, // 25 clean channel values outside threshold range generates an interrupt
        PERS_30_CYCLE = 0x09, // 30 clean channel values outside threshold range generates an interrupt
        PERS_35_CYCLE = 0x0A, // 35 clean channel values outside threshold range generates an interrupt
        PERS_40_CYCLE = 0x0B, // 40 clean channel values outside threshold range generates an interrupt
        PERS_45_CYCLE = 0x0C, // 45 clean channel values outside threshold range generates an interrupt
        PERS_50_CYCLE = 0x0D, // 50 clean channel values outside threshold range generates an interrupt
        PERS_55_CYCLE = 0x0E, // 55 clean channel values outside threshold range generates an interrupt
        PERS_60_CYCLE = 0x0F, // 60 clean channel values outside threshold range generates an interrupt
        CONFIG = 0x0D,
        CONFIG_WLONG = 0x02, // Choose between short and long (12x) wait times via WTIME
        CONTROL = 0x0F, // Set the gain level for the sensor
        STATUS = 0x13,
        STATUS_AINT = 0x10, // RGBC Clean channel interrupt
        STATUS_AVALID = 0x01, // Indicates that the RGBC channels have completed an integration cycle

        CDATAL = 0x14, // Clear channel data
        CDATAH = 0x15,
        RDATAL = 0x16, // Red channel data
        RDATAH = 0x17,
        GDATAL = 0x18, // Green channel data
        GDATAH = 0x19,
        BDATAL = 0x1A, // Blue channel data
        BDATAH = 0x1B,

        GAIN_1X = 0x00, //  1x gain
        GAIN_4X = 0x01, //  4x gain
        GAIN_16X = 0x02, // 16x gain
        GAIN_60X = 0x03  // 60x gain
    }

    let LCS_integration_time_val = 0

    // I2C functions

    function I2C_WriteReg8(addr: number, reg: number, val: number) {
        let buf3 = pins.createBuffer(2)
        buf3.setNumber(NumberFormat.UInt8BE, 0, reg)
        buf3.setNumber(NumberFormat.UInt8BE, 1, val)
        pins.i2cWriteBuffer(addr, buf3)
    }

    function I2C_ReadReg8(addr: number, reg: number): number {
        let buf4 = pins.createBuffer(1)
        buf4.setNumber(NumberFormat.UInt8BE, 0, reg)
        pins.i2cWriteBuffer(addr, buf4)
        buf4 = pins.i2cReadBuffer(addr, 1)
        return buf4.getNumber(NumberFormat.UInt8BE, 0);
    }

    function I2C_ReadReg16(addr: number, reg: number): number {
        let buf5 = pins.createBuffer(1)
        buf5.setNumber(NumberFormat.UInt8BE, 0, reg)
        pins.i2cWriteBuffer(addr, buf5)
        buf5 = pins.i2cReadBuffer(addr, 2)
        // Little endian
        return ((buf5.getNumber(NumberFormat.UInt8BE, 1) << 8) | buf5.getNumber(NumberFormat.UInt8BE, 0));
    }
    function LCS_get_raw_data(delay: boolean = false): number[] {
        if (delay) {
            // Delay for the integration time to allow reading immediately after the previous read.
            basic.pause((256 - LCS_integration_time_val) * 2.4)
        }

        let div = (256 - LCS_integration_time_val) * 1024
        let rgbc = [0, 0, 0, 0]
        rgbc[0] = I2C_ReadReg16(LCS_Constants.ADDRESS, (LCS_Constants.COMMAND_BIT | LCS_Constants.RDATAL)) / div
        rgbc[1] = I2C_ReadReg16(LCS_Constants.ADDRESS, (LCS_Constants.COMMAND_BIT | LCS_Constants.GDATAL)) / div
        rgbc[2] = I2C_ReadReg16(LCS_Constants.ADDRESS, (LCS_Constants.COMMAND_BIT | LCS_Constants.BDATAL)) / div
        rgbc[3] = I2C_ReadReg16(LCS_Constants.ADDRESS, (LCS_Constants.COMMAND_BIT | LCS_Constants.CDATAL)) / div
        if (rgbc[0] > 1) {
            rgbc[0] = 1
        }
        if (rgbc[1] > 1) {
            rgbc[1] = 1
        }
        if (rgbc[2] > 1) {
            rgbc[2] = 1
        }
        if (rgbc[3] > 1) {
            rgbc[3] = 1
        }
        return rgbc
    }

    let font: number[] = [];
    font[0] = 0x0022d422;
    font[1] = 0x0022d422;
    font[2] = 0x0022d422;
    font[3] = 0x0022d422;
    font[4] = 0x0022d422;
    font[5] = 0x0022d422;
    font[6] = 0x0022d422;
    font[7] = 0x0022d422;
    font[8] = 0x0022d422;
    font[9] = 0x0022d422;
    font[10] = 0x0022d422;
    font[11] = 0x0022d422;
    font[12] = 0x0022d422;
    font[13] = 0x0022d422;
    font[14] = 0x0022d422;
    font[15] = 0x0022d422;
    font[16] = 0x0022d422;
    font[17] = 0x0022d422;
    font[18] = 0x0022d422;
    font[19] = 0x0022d422;
    font[20] = 0x0022d422;
    font[21] = 0x0022d422;
    font[22] = 0x0022d422;
    font[23] = 0x0022d422;
    font[24] = 0x0022d422;
    font[25] = 0x0022d422;
    font[26] = 0x0022d422;
    font[27] = 0x0022d422;
    font[28] = 0x0022d422;
    font[29] = 0x0022d422;
    font[30] = 0x0022d422;
    font[31] = 0x0022d422;
    font[32] = 0x00000000;
    font[33] = 0x000002e0;
    font[34] = 0x00018060;
    font[35] = 0x00afabea;
    font[36] = 0x00aed6ea;
    font[37] = 0x01991133;
    font[38] = 0x010556aa;
    font[39] = 0x00000060;
    font[40] = 0x000045c0;
    font[41] = 0x00003a20;
    font[42] = 0x00051140;
    font[43] = 0x00023880;
    font[44] = 0x00002200;
    font[45] = 0x00021080;
    font[46] = 0x00000100;
    font[47] = 0x00111110;
    font[48] = 0x0007462e;
    font[49] = 0x00087e40;
    font[50] = 0x000956b9;
    font[51] = 0x0005d629;
    font[52] = 0x008fa54c;
    font[53] = 0x009ad6b7;
    font[54] = 0x008ada88;
    font[55] = 0x00119531;
    font[56] = 0x00aad6aa;
    font[57] = 0x0022b6a2;
    font[58] = 0x00000140;
    font[59] = 0x00002a00;
    font[60] = 0x0008a880;
    font[61] = 0x00052940;
    font[62] = 0x00022a20;
    font[63] = 0x0022d422;
    font[64] = 0x00e4d62e;
    font[65] = 0x000f14be;
    font[66] = 0x000556bf;
    font[67] = 0x0008c62e;
    font[68] = 0x0007463f;
    font[69] = 0x0008d6bf;
    font[70] = 0x000094bf;
    font[71] = 0x00cac62e;
    font[72] = 0x000f909f;
    font[73] = 0x000047f1;
    font[74] = 0x0017c629;
    font[75] = 0x0008a89f;
    font[76] = 0x0008421f;
    font[77] = 0x01f1105f;
    font[78] = 0x01f4105f;
    font[79] = 0x0007462e;
    font[80] = 0x000114bf;
    font[81] = 0x000b6526;
    font[82] = 0x010514bf;
    font[83] = 0x0004d6b2;
    font[84] = 0x0010fc21;
    font[85] = 0x0007c20f;
    font[86] = 0x00744107;
    font[87] = 0x01f4111f;
    font[88] = 0x000d909b;
    font[89] = 0x00117041;
    font[90] = 0x0008ceb9;
    font[91] = 0x0008c7e0;
    font[92] = 0x01041041;
    font[93] = 0x000fc620;
    font[94] = 0x00010440;
    font[95] = 0x01084210;
    font[96] = 0x00000820;
    font[97] = 0x010f4a4c;
    font[98] = 0x0004529f;
    font[99] = 0x00094a4c;
    font[100] = 0x000fd288;
    font[101] = 0x000956ae;
    font[102] = 0x000097c4;
    font[103] = 0x0007d6a2;
    font[104] = 0x000c109f;
    font[105] = 0x000003a0;
    font[106] = 0x0006c200;
    font[107] = 0x0008289f;
    font[108] = 0x000841e0;
    font[109] = 0x01e1105e;
    font[110] = 0x000e085e;
    font[111] = 0x00064a4c;
    font[112] = 0x0002295e;
    font[113] = 0x000f2944;
    font[114] = 0x0001085c;
    font[115] = 0x00012a90;
    font[116] = 0x010a51e0;
    font[117] = 0x010f420e;
    font[118] = 0x00644106;
    font[119] = 0x01e8221e;
    font[120] = 0x00093192;
    font[121] = 0x00222292;
    font[122] = 0x00095b52;
    font[123] = 0x0008fc80;
    font[124] = 0x000003e0;
    font[125] = 0x000013f1;
    font[126] = 0x00841080;
    font[127] = 0x0022d422;

    let _I2CAddr = 0;
    let _screen = pins.createBuffer(1025);
    let _buf2 = pins.createBuffer(2);
    let _buf3 = pins.createBuffer(3);
    let _buf4 = pins.createBuffer(4);
    let _ZOOM = 1;

    function cmd1(d: number) {
        let n = d % 256;
        pins.i2cWriteNumber(_I2CAddr, n, NumberFormat.UInt16BE);
    }

    function cmd2(d1: number, d2: number) {
        _buf3[0] = 0;
        _buf3[1] = d1;
        _buf3[2] = d2;
        pins.i2cWriteBuffer(_I2CAddr, _buf3);
    }

    function cmd3(d1: number, d2: number, d3: number) {
        _buf4[0] = 0;
        _buf4[1] = d1;
        _buf4[2] = d2;
        _buf4[3] = d3;
        pins.i2cWriteBuffer(_I2CAddr, _buf4);
    }

    function set_pos(col: number = 0, page: number = 0) {
        cmd1(0xb0 | page) // page number
        let c = col * (_ZOOM + 1)
        cmd1(0x00 | (c % 16)) // lower start column address
        cmd1(0x10 | (c >> 4)) // upper start column address    
    }

    // clear bit
    function clrbit(d: number, b: number): number {
        if (d & (1 << b))
            d -= (1 << b)
        return d
    }





    /**
     * A NeoPixel strip
     */
    export class Strip {
        buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: NeoPixelMode;
        _matrixWidth: number; // number of leds in a matrix - if any

        /**
         * Shows all LEDs to a given color (range 0-255 for r, g, b).
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_strip_color" block="%strip|显示 颜色 %rgb=neopixel_colors"
        //% strip.defl=strip
        //% weight=12
        //% parts="neopixel" subcategory=执行器 group="彩灯"
        //% color=#2699BF blockGap=10
        showColor(rgb: number) {
            rgb = rgb >> 0;
            this.setAllRGB(rgb);
            this.show();
        }

        /**
         * Shows a rainbow pattern on all LEDs.
         * @param startHue the start hue value for the rainbow, eg: 1
         * @param endHue the end hue value for the rainbow, eg: 360
         */
        //% blockId="neopixel_set_strip_rainbow" block="%strip|显示 彩虹 从 %startHue|到 %endHue"
        //% strip.defl=strip
        //% weight=13
        //% parts="neopixel" subcategory=执行器 group="彩灯" 
        //% color=#2699BF blockGap=10
        showRainbow(startHue: number = 1, endHue: number = 360) {
            if (this._length <= 0) return;

            startHue = startHue >> 0;
            endHue = endHue >> 0;
            const saturation = 100;
            const luminance = 50;
            const steps = this._length;
            const direction = HueInterpolationDirection.Clockwise;

            //hue
            const h1 = startHue;
            const h2 = endHue;
            const hDistCW = ((h2 + 360) - h1) % 360;
            const hStepCW = Math.idiv((hDistCW * 100), steps);
            const hDistCCW = ((h1 + 360) - h2) % 360;
            const hStepCCW = Math.idiv(-(hDistCCW * 100), steps);
            let hStep: number;
            if (direction === HueInterpolationDirection.Clockwise) {
                hStep = hStepCW;
            } else if (direction === HueInterpolationDirection.CounterClockwise) {
                hStep = hStepCCW;
            } else {
                hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
            }
            const h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation

            //sat
            const s1 = saturation;
            const s2 = saturation;
            const sDist = s2 - s1;
            const sStep = Math.idiv(sDist, steps);
            const s1_100 = s1 * 100;

            //lum
            const l1 = luminance;
            const l2 = luminance;
            const lDist = l2 - l1;
            const lStep = Math.idiv(lDist, steps);
            const l1_100 = l1 * 100

            //interpolate
            if (steps === 1) {
                this.setPixelColor(0, hsl(h1 + hStep, s1 + sStep, l1 + lStep))
            } else {
                this.setPixelColor(0, hsl(startHue, saturation, luminance));
                for (let t = 1; t < steps - 1; t++) {
                    const u = Math.idiv((h1_100 + t * hStep), 100) + 360;
                    const v = Math.idiv((s1_100 + t * sStep), 100);
                    const w = Math.idiv((l1_100 + t * lStep), 100);
                    this.setPixelColor(t, hsl(u, v, w));
                }
                this.setPixelColor(steps - 1, hsl(endHue, saturation, luminance));
            }
            this.show();
        }


        /**
         * Set LED to a given color (range 0-255 for r, g, b).
         * You need to call ``show`` to make the changes visible.
         * @param pixeloffset position of the NeoPixel in the strip,eg: 1
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_pixel_color" block="%strip|设置 像素 颜色 在 %pixeloffset|到 %rgb=neopixel_colors"
        //% strip.defl=strip
        //% weight=14
        //% parts="neopixel" subcategory=执行器 group="彩灯"
        //% color=#2699BF blockGap=10
        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB((pixeloffset - 1) >> 0, rgb >> 0);
        }

        /**
         * Send all the changes to the strip.
         */
        //% blockId="neopixel_show" block="%strip|显示"
        //% weight=15
        //% strip.defl=strip
        //% parts="neopixel" subcategory=执行器 group="彩灯"
        //% color=#2699BF blockGap=10
        show() {
            // only supported in beta
            // ws2812b.setBufferMode(this.pin, this._mode);
            ws2812b.sendBuffer(this.buf, this.pin);
        }

        /**
         * Turn off all LEDs.
         * You need to call ``show`` to make the changes visible.
         */
        //% blockId="neopixel_clear" block="%strip|清除"
        //% weight=16
        //% strip.defl=strip
        //% parts="neopixel" subcategory=执行器 group="彩灯"
        //% color=#2699BF blockGap=10
        clear(): void {
            const stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
        }

        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */
        //% blockId="neopixel_set_brightness" block="%strip|设置 亮度 %brightness"
        //% strip.defl=strip
        //% weight=17
        //% parts="neopixel" subcategory=执行器 group="彩灯"
        //% color=#2699BF blockGap=10
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        /**
         * Set the pin where the neopixel is connected, defaults to P0.
         */
        //% parts="neopixel" subcategory=执行器 group="彩灯"
        //% color=#2699BF blockGap=10
        setPin(pin: DigitalPin): void {

            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
        }



        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === NeoPixelMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const br3 = this.brightness;
            if (br3 < 255) {
                red = (red * br3) >> 8;
                green = (green * br3) >> 8;
                blue = (blue * br3) >> 8;
            }
            const end3 = this.start + this._length;
            const stride6 = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            for (let i5 = this.start; i5 < end3; ++i5) {
                this.setBufferRGB(i5 * stride6, red, green, blue)
            }
        }
        private setAllW(white: number) {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            let br4 = this.brightness;
            if (br4 < 255) {
                white = (white * br4) >> 8;
            }
            let buf8 = this.buf;
            let end4 = this.start + this._length;
            for (let i6 = this.start; i6 < end4; ++i6) {
                let ledoffset3 = i6 * 4;
                buf8[ledoffset3 + 3] = white;
            }
        }
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            let stride7 = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride7;

            let red2 = unpackR(rgb);
            let green2 = unpackG(rgb);
            let blue2 = unpackB(rgb);

            let br5 = this.brightness;
            if (br5 < 255) {
                red2 = (red2 * br5) >> 8;
                green2 = (green2 * br5) >> 8;
                blue2 = (blue2 * br5) >> 8;
            }
            this.setBufferRGB(pixeloffset, red2, green2, blue2)
        }
        private setPixelW(pixeloffset: number, white: number): void {
            if (this._mode !== NeoPixelMode.RGBW)
                return;

            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            pixeloffset = (pixeloffset + this.start) * 4;

            let br6 = this.brightness;
            if (br6 < 255) {
                white = (white * br6) >> 8;
            }
            let buf9 = this.buf;
            buf9[pixeloffset + 3] = white;
        }
    }

    /**
     * Create a new NeoPixel driver for `numleds` LEDs.
     * @param pin the pin where the neopixel is connected.
     * @param numleds number of leds in the strip, eg: 8,30,60,64
     */
    //% blockId="neopixel_create" block="灯环使用端口 %neopixelpin "
    //% parts="neopixel" subcategory=执行器 group="彩灯"
    //% neopixelpin.fieldEditor="gridpicker"
    //% neopixelpin.fieldOptions.width=220
    //% neopixelpin.fieldOptions.columns=2
    //% weight=18
    //% trackArgs=0,2
    //% blockSetVariable=strip
    //% color=#2699BF blockGap=10
    //% weight=51
    export function create(neopixelpin: Write_pin): Strip {
        let strip2 = new Strip();
        let stride8 = NeoPixelMode.RGBW ? 4 : 3;
        strip2.buf = pins.createBuffer(8 * stride8);
        strip2.start = 0;
        strip2._length = 8;
        strip2._mode = NeoPixelMode.RGB;
        strip2._matrixWidth = 0;
        strip2.setBrightness(128)
        if (neopixelpin == 1) {
            strip2.setPin(DigitalPin.P0);
        }
        if (neopixelpin == 2) {
            strip2.setPin(DigitalPin.P16);
        }
        if (neopixelpin == 3) {
            strip2.setPin(DigitalPin.P1);
        }
        if (neopixelpin == 4) {
            strip2.setPin(DigitalPin.P12);
        }
        if (neopixelpin == 5) {
            strip2.setPin(DigitalPin.P2);
        }
        if (neopixelpin == 6) {
            strip2.setPin(DigitalPin.P8);
        }

        return strip2;
    }

    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% blockId="neopixel_rgb" block="红 %red|绿 %green|蓝 %blue"
    //% parts="neopixel" subcategory=执行器 group="彩灯"
    //% weight=12
    //% color=#2699BF blockGap=10
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * Gets the RGB value of a known color
    */
    //% blockId="neopixel_colors" block="%color"
    //% parts="neopixel" subcategory=执行器 group="彩灯"
    //% weight=13
    //% color=#2699BF blockGap=10
    export function colors(color: NeoPixelColors): number {
        return color;
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }

    function unpackR(rgb: number): number {
        let r3 = (rgb >> 16) & 0xFF;
        return r3;
    }

    function unpackG(rgb: number): number {
        let g3 = (rgb >> 8) & 0xFF;
        return g3;
    }

    function unpackB(rgb: number): number {
        let b3 = (rgb) & 0xFF;
        return b3;
    }

    export function hsl(h: number, s: number, l: number): number {
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);

        h = h % 360;
        s = Math.clamp(0, 99, s);
        l = Math.clamp(0, 99, l);
        let c2 = Math.idiv((((100 - Math.abs(2 * l - 100)) * s) << 8), 10000); //chroma, [0,255]
        let h12 = Math.idiv(h, 60);//[0,6]
        let h22 = Math.idiv((h - h12 * 60) * 256, 60);//[0,255]
        let temp = Math.abs((((h12 % 2) << 8) + h22) - 256);
        let x = (c2 * (256 - (temp))) >> 8;//[0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h12 == 0) {
            r$ = c2; g$ = x; b$ = 0;
        } else if (h12 == 1) {
            r$ = x; g$ = c2; b$ = 0;
        } else if (h12 == 2) {
            r$ = 0; g$ = c2; b$ = x;
        } else if (h12 == 3) {
            r$ = 0; g$ = x; b$ = c2;
        } else if (h12 == 4) {
            r$ = x; g$ = 0; b$ = c2;
        } else if (h12 == 5) {
            r$ = c2; g$ = 0; b$ = x;
        }
        let m2 = Math.idiv((Math.idiv((l * 2 << 8), 100) - c2), 2);
        let r4 = r$ + m2;
        let g4 = g$ + m2;
        let b4 = b$ + m2;
        return packRGB(r4, g4, b4);
    }

    export enum HueInterpolationDirection {
        Clockwise,
        CounterClockwise,
        Shortest
    }





    /**
    * show text in OLED
    * @param oled_x is X alis, eg: 0
    * @param oled_y is Y alis, eg: 0
    * @param s is the text will be show, eg: 'Hello!'
    */
    //% blockId="OLED12864_I2C_SHOWSTRING1" block="显示 文本 请选择显示位置%oled|文本 %s"
    //% parts=OLED12864_I2C trackArgs=0
    //% oled.fieldEditor="gridpicker"
    //% oled.fieldOptions.width=320
    //% oled.fieldOptions.columns=13
    //% group="OLED显示屏" subcategory=执行器
    //% weight=10 blockGap=10 color=#0855AA



    export function showString(oled: Oled, s: string, color: number = 1) {
        let oled_x = oled % 13;
        let oled_y = Math.floor(oled / 13);
        let crror = 0
        let col2 = 0
        let q = 0
        let ind2 = 0
        let firstoledinit = 0
        if (pins.i2cReadNumber(_I2CAddr, NumberFormat.Int8LE) == 67) {
            init();
        }
        else {
            for (let r = 0; r < s.length; r++) {
                q = font[s.charCodeAt(r)]
                for (let k = 0; k < 5; k++) {
                    col2 = 0
                    for (let l = 0; l < 5; l++) {
                        if (q & (1 << (5 * k + l)))
                            col2 |= (1 << (l + 1))
                    }
                    ind2 = (oled_x + r) * 5 * (_ZOOM + 1) + oled_y * 128 + k * (_ZOOM + 1) + 1
                    if (color == 0)
                        col2 = 255 - col2
                    _screen[ind2] = col2
                    if (_ZOOM)
                        _screen[ind2 + 1] = col2
                }
            }
            set_pos(oled_x * 5, oled_y)
            let ind02 = oled_x * 5 * (_ZOOM + 1) + oled_y * 128
            let buf7 = _screen.slice(ind02, ind2 + 1)
            buf7[0] = 0x40
            pins.i2cWriteBuffer(_I2CAddr, buf7)
        }




    }

    /**
     * show a number in OLED
     * @param olednum_x is X alis, eg: 0
     * @param olednum_y is Y alis, eg: 0
     * @param num is the number will be show, eg: 12
     * @param color is number color, eg: 1
     */
    //% blockId="OLED12864_I2C_NUMBER" block="显示 数字 请选择显示位置%oled|数字 %num"
    //% parts=OLED12864_I2C trackArgs=0
    //% olednum.fieldEditor="gridpicker"
    //% olednum.fieldOptions.width=320
    //% olednum.fieldOptions.columns=13
    //% group="OLED显示屏" subcategory=执行器
    //% weight=9 blockGap=10 color=#0855AA
    export function showNumber(olednum: Oled, num: number, color: number = 1) {

        let olednum_x = 0
        let olednum_y = 0



        olednum_x = Math.floor(olednum / 13);
        olednum_y = olednum % 13;
        showString(olednum, num.toString(), color)
    }


    export function draw() {
        set_pos()
        pins.i2cWriteBuffer(_I2CAddr, _screen)
    }

    /**
     * clear screen
     */
    //% blockId="OLED12864_I2C_CLEAR" block="清除"
    //% parts=OLED12864_I2C trackArgs=0
    //% group="OLED显示屏" subcategory=执行器
    //% weight=8 blockGap=10 color=#0855AA
    export function clear() {
        _screen.fill(0)
        _screen[0] = 0x40
        draw()
    }

    /**
     * OLED initialize
     * @param addr is i2c addr, eg: 60
     */
    //% blockId="OLED12864_I2C_init" block="初始化 OLED "
    //% parts=OLED12864_I2C trackArgs=0
    //% weight=11 blockGap=10
    //% group="OLED显示屏" subcategory=执行器
    //% blockGap=10  color=#0855AA
    export function init() {
        _I2CAddr = 60;
        cmd1(0xAE)       // SSD1306_DISPLAYOFF
        cmd1(0xA4)       // SSD1306_DISPLAYALLON_RESUME
        cmd2(0xD5, 0xF0) // SSD1306_SETDISPLAYCLOCKDIV
        cmd2(0xA8, 0x3F) // SSD1306_SETMULTIPLEX
        cmd2(0xD3, 0x00) // SSD1306_SETDISPLAYOFFSET
        cmd1(0 | 0x0)    // line #SSD1306_SETSTARTLINE
        cmd2(0x8D, 0x14) // SSD1306_CHARGEPUMP
        cmd2(0x20, 0x00) // SSD1306_MEMORYMODE
        cmd3(0x21, 0, 127) // SSD1306_COLUMNADDR
        cmd3(0x22, 0, 63)  // SSD1306_PAGEADDR
        cmd1(0xa0 | 0x1) // SSD1306_SEGREMAP
        cmd1(0xc8)       // SSD1306_COMSCANDEC
        cmd2(0xDA, 0x12) // SSD1306_SETCOMPINS
        cmd2(0x81, 0xCF) // SSD1306_SETCONTRAST
        cmd2(0xd9, 0xF1) // SSD1306_SETPRECHARGE
        cmd2(0xDB, 0x40) // SSD1306_SETVCOMDETECT
        cmd1(0xA6)       // SSD1306_NORMALDISPLAY
        cmd2(0xD6, 1)    // zoom on
        cmd1(0xAF)       // SSD1306_DISPLAYON
        clear()
        _ZOOM = 1
    }


    /**
   //% blockId="test" block="读取P0、P1、P2端口模拟值 "
   //% subcategory=测试专用
   export function Test(): string {
       let a0 = 0;
       let a1 = 0;
       let a2 = 0;
       let p1 = '';

       a0 = pins.map(
           pins.analogReadPin(AnalogPin.P0),
           0,
           1023,
           0,
           1023
       );
       a1 = pins.map(
           pins.analogReadPin(AnalogPin.P1),
           0,
           1023,
           0,
           1023
       );
       a2 = pins.map(
           pins.analogReadPin(AnalogPin.P2),
           0,
           1023,
           0,
           1023
       );

       p1 = a0 + ';' + a1 + ';' + a2
       return p1
   }

   //% blockId="test2" block="读取各端口的数字值 "
   //% subcategory=测试
   export function Test2(): string {
       let d0 = 0;
       let d1 = 0;
       let d2 = 0;
       let d8 = 0;
       let d12 = 0;
       let d16 = 0;
       let p = '';

       d0 = pins.digitalReadPin(DigitalPin.P0)
       d1 = pins.digitalReadPin(DigitalPin.P1);
       d2 = pins.digitalReadPin(DigitalPin.P2);
       d8 = pins.digitalReadPin(DigitalPin.P8);
       d12 = pins.digitalReadPin(DigitalPin.P12)
       d16 = pins.digitalReadPin(DigitalPin.P16);


       p = d0 + ';' + d1 + ';' + d2 + ';' + d8 + ';' + d12 + ';' + d16
       return p
   }**/




}
