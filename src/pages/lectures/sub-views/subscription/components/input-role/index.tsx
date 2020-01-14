import React, {Component} from "react";
import {LectureSubscriptionPageInputRoleConst} from "./constants";
import {InputComponent} from "../../../../../../components/input";
import {FormValidators} from "../../../../../../validation/form-validators";
import {RulesType} from "../../../../../../validation/rules-type";

export class LectureSubscriptionPageInputRole extends Component {

  render = () => {

    const {
      label,
      inputRequired
    } =  LectureSubscriptionPageInputRoleConst;

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
