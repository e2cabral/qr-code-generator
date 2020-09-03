export abstract class LevelEnum {
    static H: string = 'H';
    static Q: string = 'Q';
    static M: string = 'M';
    static L: string = 'L';

    static getAll(): Array<string> {
        return [
            this.H,
            this.Q,
            this.L,
            this.M
        ];
    }
}