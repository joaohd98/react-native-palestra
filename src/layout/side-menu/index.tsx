import React, {Component} from "react";
import {SideMenuComponentStyles} from "./styles";
import {TouchableOpacity} from "react-native";

export class SideMenuComponent extends Component {

  render = () => {
    
    const {
      View,
      ViewIcon,
      Icon,
      ViewSubList,
      ViewList,
      TextListTitle,
      TextLink,
    } = SideMenuComponentStyles;

    return (
      <View>
        <ViewIcon>
          <Icon name="close" />
        </ViewIcon>
        <ViewList>
          <TextListTitle>
            Filtrar por assunto
          </TextListTitle>
          <ViewSubList>
            <TouchableOpacity>
              <TextLink>
                Todos
              </TextLink>
            </TouchableOpacity>
          </ViewSubList>
          <ViewSubList>
            <TouchableOpacity>
              <TextLink>
                Gestão de Pessoas
              </TextLink>
            </TouchableOpacity>
          </ViewSubList>
          <ViewSubList>
            <TouchableOpacity>
              <TextLink>
                Tecnologia
              </TextLink>
            </TouchableOpacity>
          </ViewSubList>
          <ViewSubList>
            <TouchableOpacity>
              <TextLink>
                Empreendedorismo
              </TextLink>
            </TouchableOpacity>
          </ViewSubList>
          <ViewSubList>
            <TouchableOpacity>
              <TextLink>
                Cultura Maker
              </TextLink>
            </TouchableOpacity>
          </ViewSubList>
        </ViewList>
        <TouchableOpacity>
          <TextLink>Minhas inscrições</TextLink>
        </TouchableOpacity>
      </View>
    )

  }

}
