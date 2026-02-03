declare const colors: {
    readonly white_ff: "#ffffff";
    readonly white_ff_10: "#ffffff10";
    readonly white_ff_15: "#ffffff15";
    readonly white_ff_20: "#ffffff20";
    readonly white_ff_35: "#ffffff35";
    readonly light_1: "#f8f9fb";
    readonly light_2: "#f1f3f8";
    readonly light_3: "#f9fbff";
    readonly light_4: "#f7fafe";
    readonly light_5: "#ebf3ff";
    readonly light_6: "#eaeff5";
    readonly light_7: "#d9e1ea";
    readonly primary: "#435879";
    readonly primary_dark_1: "#2b4063";
    readonly primary_dark_2: "#192540";
    readonly primary_light_1: "#516b93";
    readonly primary_light_2: "#91a8c3";
    readonly primary_light_3: "#b8c7d8";
    readonly secondary: "#1e51c1";
    readonly secondary_dark_1: "#163b8e";
    readonly secondary_light_1: "#2159d4";
    readonly secondary_light_2: "#386de0";
    readonly tertiary: "#1ba9c7";
    readonly tertiary_dark_1: "#489fb5";
    readonly negative: "#c9252d";
    readonly negative_dark_1: "#bb121a";
    readonly negative_light_1: "#d7373f";
    readonly negative_light_2: "#e34850";
    readonly negative_light_3: "#f6d8da";
    readonly negative_light_4: "#f9e3e4";
    readonly negative_light_5: "#fdf3f3";
    readonly positive: "#268e6c";
    readonly positive_dark_1: "#12805c";
    readonly positive_dark_2: "#107154";
    readonly positive_light_2: "#2d9d78";
    readonly positive_light_3: "#eefaf6";
    readonly sales_action: "#ec6c2c";
    readonly black: "#000000";
    readonly transparent: "transparent";
    readonly sales: {
        action: string;
        action_dark_1: string;
        action_light_1: string;
        action_light_2: string;
        action_light_3: string;
    };
    readonly call: {
        action: string;
        action_dark_1: string;
        action_light_1: string;
        action_light_2: string;
        action_light_3: string;
    };
    readonly marketing: {
        action: string;
        action_dark_1: string;
        action_light_1: string;
        action_light_2: string;
        action_light_3: string;
    };
    readonly club: {
        action: string;
        action_dark_1: string;
        action_light_1: string;
        action_light_2: string;
        action_light_3: string;
    };
    readonly team: {
        action: string;
        action_dark_1: string;
        action_light_1: string;
        action_light_2: string;
        action_light_3: string;
    };
    readonly desk: {
        action: string;
        action_dark_1: string;
        action_light_1: string;
        action_light_2: string;
        action_light_3: string;
    };
    readonly form: {
        action: string;
        action_dark_1: string;
        action_light_1: string;
        action_light_2: string;
        action_light_3: string;
    };
    readonly task: {
        action: string;
        action_dark_1: string;
        action_light_1: string;
        action_light_2: string;
        action_light_3: string;
    };
    readonly rayan: {
        action: string;
        action_dark_1: string;
        action_light_1: string;
        action_light_2: string;
        action_light_3: string;
    };
};
type ColorScheme = typeof colors;
type AppColorSchema = {
    action: string;
    action_dark_1: string;
    action_light_1: string;
    action_light_2: string;
    action_light_3: string;
};
export { colors };
export type { AppColorSchema, ColorScheme };
