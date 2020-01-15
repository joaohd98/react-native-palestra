import React, {Component} from "react";
import {LectureSubscriptionPageInputEmailConst} from "./constants";
import {InputComponent} from "../../../../../../components/input";
import {FormValidators} from "../../../../../../validation/form-validators";
import {RulesType} from "../../../../../../validation/rules-type";

interface Props {
  changeValue: (value: string, valid: boolean) => void,
  value: string
}

export class LectureSubscriptionPageInputEmail extends Component<Props> {

  render = () => {

    const {
      changeValue,
      value,
    } = this.props;

    const {
      label,
      inputRequired,
      inputEmail
    } =  LectureSubscriptionPageInputEmailConst;

    const formMessages: FormValidators[] = [
      {
        type: RulesType.required,
        message: inputRequired
      },
      {
        type: RulesType.email,
        message: inputEmail
      }
    ];

    return (
      <InputComponent
        label={label}
        value={value}
        formMessages={formMessages}
        changeValue={changeValue}
      />
    )
  }

}
