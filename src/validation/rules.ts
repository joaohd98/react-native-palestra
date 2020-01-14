import {FormValidators} from "./form-validators";
import {RulesType} from "./rules-type";

export class Rules {

  private static required = (value: string): boolean => {
    return value.trim() != "";
  };

  private static isEmailValid = (value: string): boolean => {

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    return regex.test(value);

  };

  static validate = (ruleType: RulesType, value: string): boolean => {

    const rules = {
      [RulesType.required]: Rules.required(value),
      [RulesType.email]: Rules.isEmailValid(value),
    };

    return rules[ruleType];

  }

}
