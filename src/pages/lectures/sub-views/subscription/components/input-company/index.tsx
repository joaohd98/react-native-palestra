import React, {Component} from "react";
import {InputComponent} from "../../../../../../components/input";
import {FormValidators} from "../../../../../../validation/form-validators";
import {RulesType} from "../../../../../../validation/rules-type";
import {LectureSubscriptionPageInputCompanyConst} from "./constants";

export class LectureSubscriptionPageInputCompany extends Component {

  render = () => {

    const {
      label,
      inputRequired
    } =  LectureSubscriptionPageInputCompanyConst;

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
