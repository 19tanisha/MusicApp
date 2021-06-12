import Carousel, { Pagination } from "react-native-snap-carousel";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CategoryCarausel = (prop) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const [data, setData] = React.useState([
    {
      name: "Educational",
      img: {
        uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
      },
      id: "1",
    },
    {
      name: "Stories",
      img: {
        uri: "https://wallpapercave.com/wp/wp2971096.jpg",
      },
      id: "2",
    },
    {
      name: "Workout",
      img: {
        uri: "https://i.pinimg.com/736x/00/6f/e7/006fe7f785c991102866b859a4b6be7e.jpg",
      },
      id: "3",
    },
    {
      name: "Comedy",
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucskHt1xghcl0vXiAGjhkz_tL27pFbmBYgQ&usqp=CAU",
      },
      id: "4",
    },
    {
      name: "News",
      img: {
        uri: "https://cubaneight.com/wp-content/uploads/2021/02/pexels-photo-518543.jpeg",
      },
      id: "5",
    },
  ]);
  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        layoutCardOffset={0}
        ref={isCarousel}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                paddingTop: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity activeOpacity={0.5}>
                <ImageBackground
                  source={item.img}
                  blurRadius={3}
                  style={{
                    width: windowWidth * 0.7,
                    height: 150,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  imageStyle={{ borderRadius: 30 }}
                >
                  <Text
                    style={{ fontSize: 50, fontWeight: "bold", color: "white" }}
                  >
                    {item.name}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 0.7}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        enableSnap={true} //perfect center me ata hai
        loop={true}
        autoplay={true}
        enableMomentum={false}
        lockScrollWhileSnapping={true} //prevent auto scroll while we scroll
        autoplayDelay={1000}
        autoplayInterval={2000}
      />
      <Pagination
        dotsLength={data.length}
        dotColor="white"
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "orange",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotColor="white"
        inactiveDotScale={1}
        tappableDots={true}
        containerStyle={{}}
      />
    </View>
  );
};

export default CategoryCarausel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: "100%",
    height: 240,
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 10,
  },
});
