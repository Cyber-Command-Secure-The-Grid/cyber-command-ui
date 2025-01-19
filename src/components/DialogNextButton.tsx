import { DialogOnOptionSelect, DialogOption } from '../types/Dialog';

export function DialogNextButton(index: number, onOptionSelect: DialogOnOptionSelect, option: DialogOption) {
  return <button className="dialogue-next-button" key={index}
    onClick={() => onOptionSelect({
      nextDialogId: option.nextDialogId,
      nextSecurityConsoleId: option.nextSecurityConsoleId
    })}>
    {option.text}
  </button>;
}
