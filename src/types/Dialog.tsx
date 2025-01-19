export interface DialogState {
  name?: string;
}

export interface DialogMetadata {
  avatarFileName?: string;
  text: (state: DialogState) => string[];
  options?: DialogOption[];
}

export type DialogMetadataDictionary = Record<string, DialogMetadata>;

export interface DialogOption extends DialogOptionNextStateIds {
  text: string;
}

export interface DialogOptionNextStateIds {
  nextDialogId?: string;
  nextSecurityConsoleId?: string;
}

export type DialogOnOptionSelect = (nextIds: DialogOptionNextStateIds) => void;

export interface DialogProps {
  dialog: DialogMetadata;
  onOptionSelect: DialogOnOptionSelect;
  state: DialogState;
}
