import React, {Component} from "react";
import {SectionList, View} from "react-native";
import {LectureResponseModel, LectureTypeResponseModel} from "../../../../../services/lectures/model";
import {LecturesPageListStyles} from "./styles";
import {LecturesPageCard} from "../card";
import {LecturesPageWarningMessage, LecturesPageWarningMessageStatus} from "../warning-message";

interface ISection {
  title: string,
  data: LectureResponseModel[]
}

interface State {
  sections: ISection[]
}

interface Props {
  lectures: LectureResponseModel[],
  types: LectureTypeResponseModel[],
  selectedType: LectureTypeResponseModel | null;
}

export class LecturesPageList extends Component<Props, State> {

  state = {
    sections: []
  };

  componentDidMount = (): void => {
    this.formatSections();
  };

  componentDidUpdate = (prevProps: Readonly<Props>, prevState: Readonly<State>): void => {
    if(JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      this.formatSections();
    }
  };

  formatSections = () => {

    const { lectures, types, selectedType } = this.props;

    let sections: ISection[] = [];

    types.forEach(type => {

      if(selectedType && selectedType.Codigo !== type.Codigo) {
        return;
      }

      let section: ISection = {
        title: type.Descricao,
        data: lectures.filter(lectures => lectures.CodigoTipoCategoria === type.Codigo)
      };

      sections.push(section);

    });

    this.setState({ sections });

  };

  render = () => {

    const { SectionTitle } = LecturesPageListStyles;

    const { sections } = this.state;

    return (
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <LecturesPageCard lecture={item as LectureResponseModel} />}
        renderSectionHeader={({ section: { title } }) => <SectionTitle>{ title }</SectionTitle>}
        ListEmptyComponent={<LecturesPageWarningMessage status={LecturesPageWarningMessageStatus.emptyList}/>}
      />
    )

  }

}
