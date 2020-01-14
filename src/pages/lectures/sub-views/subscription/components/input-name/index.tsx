import React, {Component} from "react";
import {LectureSubscriptionPageInputNameConst} from "./constants";
import {InputComponent} from "../../../../../../components/input";
import {FormValidators} from "../../../../../../validation/form-validators";
import {RulesType} from "../../../../../../validation/rules-type";

export class LectureSubscriptionPageInputName extends Component {

  render = () => {

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
      />
    )
  }

}
