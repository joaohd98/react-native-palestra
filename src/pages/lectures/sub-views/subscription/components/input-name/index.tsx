import React, {Component} from "react";
import {LectureSubscriptionPageInputNameConst} from "./constants";
import {InputComponent} from "../../../../../../components/input";
import {FormValidators} from "../../../../../../validation/form-validators";
import {RulesType} from "../../../../../../validation/rules-type";

interface Props {
  changeValue: (value: string, valid: boolean) => void,
}

export class LectureSubscriptionPageInputName extends Component<Props> {

  render = () => {

    const {
      changeValue,
    } = this.props;

    const {
      label,
      inputRequired
    } =  LectureSubscriptionPageInputNameConst;

    const formMessages: FormValidators[] = [{
      type: RulesType.required,
      message: inputRequired
    }];

    return (
      <InputComponent
        label={label}
        formMessages={formMessages}
        changeValue={changeValue}
      />
    )
  }

}
