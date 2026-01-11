const colors = {
  white_ff: '#ffffff',
  white_ff_10: '#ffffff10',
  white_ff_15: '#ffffff15',
  white_ff_20: '#ffffff20',
  white_ff_35: '#ffffff35',
  light_1: '#f8f9fb',
  light_2: '#f1f3f8',
  light_3: '#f9fbff',
  light_4: '#f7fafe',
  light_5: '#ebf3ff',
  light_6: '#eaeff5',
  light_7: '#d9e1ea',
  primary: '#435879',
  primary_dark_1: '#2b4063',
  primary_dark_2: '#192540',
  primary_light_1: '#516b93',
  primary_light_2: '#91a8c3',
  primary_light_3: '#b8c7d8',
  secondary: '#1e51c1',
  secondary_dark_1: '#163b8e',
  secondary_light_1: '#2159d4',
  secondary_light_2: '#386de0',
  tertiary: '#1ba9c7',
  tertiary_dark_1: '#489fb5',
  negative: '#c9252d',
  negative_dark_1: '#bb121a',
  negative_light_1: '#d7373f',
  negative_light_2: '#e34850',
  negative_light_3: '#f6d8da',
  negative_light_4: '#f9e3e4',
  negative_light_5: '#fdf3f3',
  positive: '#268e6c',
  positive_dark_1: '#12805c',
  positive_dark_2: '#107154',
  positive_light_2: '#2d9d78',
  positive_light_3: '#eefaf6',
  sales_action: '#ec6c2c',
  black: '#000000',
  transparent: 'transparent',
  sales: {
    action: '#ec6c2c',
    action_dark_1: '#bc5624',
    action_light_1: '#ff8136',
    action_light_2: '#ff973e',
    action_light_3: '#ffac48',
  } satisfies AppColorSchema,
  call: {
    action: '#8345c9',
    action_dark_1: '#6837a0',
    action_light_1: '#9d52f1',
    action_light_2: '#b760ff',
    action_light_3: '#d16eff',
  } satisfies AppColorSchema,
  marketing: {
    action: '#2962ff',
    action_dark_1: '#1043ce',
    action_light_1: '#3175ff',
    action_light_2: '#3d8cff',
    action_light_3: '#4ea3ff',
  } satisfies AppColorSchema,
  club: {
    action: '#d21369',
    action_dark_1: '#a80f54',
    action_light_1: '#fc167e',
    action_light_2: '#ff1a93',
    action_light_3: '#ff27ab',
  } satisfies AppColorSchema,
  team: {
    action: '#B5179E',
    action_dark_1: '#9E218C',
    action_light_1: '#D834C0',
    action_light_2: '#F841DD',
    action_light_3: '#FF56E6',
  } satisfies AppColorSchema,
  desk: {
    action: '#50C877',
    action_dark_1: '#3B965B',
    action_light_1: '#60D38F',
    action_light_2: '#6BDBA2',
    action_light_3: '#80E9BF',
  } satisfies AppColorSchema,
  form: {
    action: '#00BFA5',
    action_dark_1: '#00927E',
    action_light_1: '#00CCB7',
    action_light_2: '#03D5C4',
    action_light_3: '#05E4DB',
  } satisfies AppColorSchema,
  task: {
    action: '#5066D4',
    action_dark_1: '#3C4C9F',
    action_light_1: '#617ADD',
    action_light_2: '#6D8AE3',
    action_light_3: '#81A2EE',
  } satisfies AppColorSchema,
  rayan: {
    action: '#5066D4',
    action_dark_1: '#3C4C9F',
    action_light_1: '#617ADD',
    action_light_2: '#6D8AE3',
    action_light_3: '#81A2EE',
  } satisfies AppColorSchema,
} as const;

type ColorScheme = typeof colors;
type AppColorSchema= {
    action: string;
    action_dark_1: string;
    action_light_1: string;
    action_light_2: string;
    action_light_3: string;
}


export { colors };

export type { ColorScheme ,AppColorSchema };
