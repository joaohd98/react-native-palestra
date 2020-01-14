import React, {Component} from "react";
import {LectureSubscriptionPageInputEmailConst} from "./constants";
import {InputComponent} from "../../../../../../components/input";
import {FormValidators} from "../../../../../../validation/form-validators";
import {RulesType} from "../../../../../../validation/rules-type";

export class LectureSubscriptionPageInputEmail extends Component {

  render = () => {

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
        formMessages={formMessages}
      />
    )
  }

}
