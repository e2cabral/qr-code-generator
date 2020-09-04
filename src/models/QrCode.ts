export abstract class QrCode {
    constructor(value: string, bgColor: string, fgColor: string, size: number, level: 'L' | 'M' | 'Q' | 'H') {
        this.value = value;
        this.bgColor = bgColor;
        this.fgColor = fgColor;
        this.size = size;
        this.level = level;
    }

    value: string;
    bgColor: string;
    fgColor: string;
    size: number;
    level: 'L' | 'M' | 'Q' | 'H';
}