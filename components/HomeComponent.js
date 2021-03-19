import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
//import { RECIPES } from "../shared/recipes";
import { BREAKFASTS } from "../shared/featuredBreakfasts";
import { LUNCHES } from "../shared/featuredLunches";
import { DINNERS } from "../shared/featuredDinners";

function RenderItem({item}) {
    if (item) {
        return (
            <Card 
                featuredTitle = {item.name}
                image={require('./images/strawberry-breakfast-pastries.jpg')}
            >
            <Text
                style={{margin: 10}}
            >
            {item.directions}
            </Text>
            </Card>
        )
    }
    return <View />
}

class Home extends Component {
     constructor(props) {
         super(props);
         this.state={
            // recipes: RECIPES,
             breakfasts: BREAKFASTS,
             lunches: LUNCHES,
             dinners: DINNERS
         }
     }

    static navigationOptions = {
        title: "Home"
    }



    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.state.breakfasts.filter(breakfast => breakfast.featured)[0]}
                />
                <RenderItem
                    item={this.state.lunches.filter(lunch => lunch.featured)[0]}
                />
                <RenderItem
                    item={this.state.dinners.filter(dinner => dinner.featured)[0]}
                />

            </ScrollView>
        );
    }
}

export default Home