import React, {Component} from "react";
import {LectureResponseModel, LectureTypeResponseModel} from "../../../services/lectures/model";
import {SectionList, SectionListData} from "react-native";
import {ListLectureStyles} from "./styles";
import {ListLectureCard} from "../card";
import {ListLectureCardLoading} from "../card-loading";
import {Helpers} from "../../../helpers";

interface ISection {
  title: string,
  data: LectureResponseModel[] | string[] ,
}

interface State {
  sections: ISection[]
}

interface Props {
  lectures?: LectureResponseModel[],
  types?: LectureTypeResponseModel[],
  loading?: boolean,
  ruleShowType?: (type: LectureTypeResponseModel) => boolean,
  ruleShowLecture?: (lecture: LectureResponseModel) => boolean,
  listEmptyComponent?: JSX.Element,
  listFooterComponent?: JSX.Element,
}

export class ListLecture extends Component<Props, State> {

  state = {
    sections: []
  };

  componentDidMount = (): void => {
    this.formatSections();
  };

  componentDidUpdate = (prevProps: Readonly<Props>, prevState: Readonly<State>): void => {

    const isEqual = Helpers.isEqual;

    const hasChangeLectures = isEqual(prevProps.lectures, this.props.lectures);
    const hasChangeTypes = isEqual(prevProps.types, this.props.types);

    if(!hasChangeLectures || !hasChangeTypes) {
      this.formatSections();
    }

  };

  getSections = () => {

    const {loading, listFooterComponent} = this.props;
    const { sections } = this.state;

    if(!loading)
      return sections;

    const size = listFooterComponent ? 3 : 10;

    let section: any = {
      title: "",
      data: [],
    };

    for(let i = 0; i < size; i++) {
      section.data.push(null);
    }

    return [section];

  };

  formatSections = () => {

    const { lectures, types, ruleShowType, ruleShowLecture } = this.props;

    console.log(ruleShowType);
    console.log(ruleShowLecture);
    if(!lectures || !types)
      return;

    let sections: ISection[] = [];

    types.forEach(type => {

      if(ruleShowType && ruleShowType(type))
        return;

      let section: ISection = {
        title: type.Descricao,
        data: lectures.filter(lecture => (!ruleShowLecture || ruleShowLecture(lecture)) && lecture.CodigoTipoCategoria === type.Codigo),
      };

      if(section.data.length > 0)
        sections.push(section);

    });

    this.setState({ sections });

  };

  render = () => {

    const { loading, listEmptyComponent, listFooterComponent } = this.props;
    const { SectionTitle } = ListLectureStyles;

    return (
      <SectionList
        scrollEnabled={!loading}
        sections={this.getSections()!}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => loading ? <ListLectureCardLoading/> : <ListLectureCard lecture={item as LectureResponseModel} />}
        renderSectionHeader={({ section: { title } }) => <SectionTitle>{ title }</SectionTitle>}
        ListEmptyComponent={listEmptyComponent}
        ListFooterComponent={listFooterComponent}
      />
    )

  }

}
