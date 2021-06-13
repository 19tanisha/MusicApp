import Carousel, { Pagination } from "react-native-snap-carousel";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CategoryCarausel = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const [data, setData] = React.useState([
    {
      name: "Rock",
      img: {
        uri: "https://www.top10hq.com/wp-content/uploads/2015/04/60s-british-rock-music.jpg",
      },
      id: "1",
      list: [
        {
          name: "Attention",
          img: {
            uri: "https://tecake.in/wp-content/uploads/2020/11/attention.jpg",
          },
          id: "11",
          artist: "Charlie Puth",
        },
        {
          name: "Perfect",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg",
          },
          id: "12",
          artist: "Ed Sheeran",
        },
        {
          name: "Love Story",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Taylor_Swift_-_Love_Story.png/220px-Taylor_Swift_-_Love_Story.png",
          },
          id: "13",
          artist: "Taylor Swift",
        },

        {
          name: "Sweet but Psycho",
          img: {
            uri: "https://i.ytimg.com/vi/zd-h01o7LtI/maxresdefault.jpg",
          },
          id: "14",
          artist: "Ava Max",
        },

        {
          name: "We Dont Talk Anymore",
          img: {
            uri: "https://m.media-amazon.com/images/M/MV5BOWQyYmJiOWUtNzkzYS00YWJlLWI5YjgtYTg4MjI0MmM1N2ZkXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
          },
          id: "15",
          artist: "Charlie Puth",
        },
        {
          name: "Blank Space",
          img: {
            uri: "https://lh3.googleusercontent.com/mBOJa7zx1cZzdOycV53oMtWdnyT2zxCXCQjf5GwW_baplWe30FhOIMaS1q-MVJOOZd_S_h5-j5L0u1oikh2EEL-vNtbuBGEHnqRDd9cDzB1i3KA5Xxnurh9SwMbulFtrJg=s412",
          },
          id: "16",
          artist: "Taylor Swift",
        },
        {
          name: "History",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
          },
          id: "17",
          artist: "One Direction",
        },

        {
          name: "Tera Zikar",
          img: {
            uri: "https://a10.gaanacdn.com/gn_img/albums/jBr3gybR1m/Br3glYkNWR/size_xxl.webp",
          },
          id: "18",
          artist: "Darshan Raval",
        },
        {
          name: "Rabta",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/8/8b/Raabta_poster.jpg",
          },
          id: "19",
          artist: "Arijit Singh",
        },
        {
          name: "Humsafar",
          img: {
            uri: "https://qph.fs.quoracdn.net/main-qimg-4a8c3ce3bbb6315bcd4b782a5bf93261",
          },
          id: "20",
          artist: "Akhil Sachdeva & Mansheel Gujral",
        },
        {
          name: "Taki Taki",
          img: {
            uri: "https://static.billboard.com/files/media/DJ-Snake-Ozuna-Cardi-B-Selena-Gomez-2018-billboard-1548-compressed.jpg",
          },
          id: "21",
          artist: "DJ Snake",
        },
        {
          name: "Believer",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/9/95/Origins_cover.png",
          },
          id: "22",
          artist: "Imagine Dragon",
        },
      ],
    },
    {
      name: "HipHop",
      img: {
        uri: "https://www.udiscovermusic.com/wp-content/uploads/2016/02/Hip-Hop-In-20-Songs-artwork-web-optimised-1000.jpg",
      },
      id: "2",
      list: [
        {
          name: "Attention",
          img: {
            uri: "https://tecake.in/wp-content/uploads/2020/11/attention.jpg",
          },
          id: "11",
          artist: "Charlie Puth",
        },
        {
          name: "Perfect",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg",
          },
          id: "12",
          artist: "Ed Sheeran",
        },
        {
          name: "Love Story",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Taylor_Swift_-_Love_Story.png/220px-Taylor_Swift_-_Love_Story.png",
          },
          id: "13",
          artist: "Taylor Swift",
        },

        {
          name: "Sweet but Psycho",
          img: {
            uri: "https://i.ytimg.com/vi/zd-h01o7LtI/maxresdefault.jpg",
          },
          id: "14",
          artist: "Ava Max",
        },

        {
          name: "We Dont Talk Anymore",
          img: {
            uri: "https://m.media-amazon.com/images/M/MV5BOWQyYmJiOWUtNzkzYS00YWJlLWI5YjgtYTg4MjI0MmM1N2ZkXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
          },
          id: "15",
          artist: "Charlie Puth",
        },
        {
          name: "Blank Space",
          img: {
            uri: "https://lh3.googleusercontent.com/mBOJa7zx1cZzdOycV53oMtWdnyT2zxCXCQjf5GwW_baplWe30FhOIMaS1q-MVJOOZd_S_h5-j5L0u1oikh2EEL-vNtbuBGEHnqRDd9cDzB1i3KA5Xxnurh9SwMbulFtrJg=s412",
          },
          id: "16",
          artist: "Taylor Swift",
        },
        {
          name: "History",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
          },
          id: "17",
          artist: "One Direction",
        },

        {
          name: "Tera Zikar",
          img: {
            uri: "https://a10.gaanacdn.com/gn_img/albums/jBr3gybR1m/Br3glYkNWR/size_xxl.webp",
          },
          id: "18",
          artist: "Darshan Raval",
        },
        {
          name: "Rabta",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/8/8b/Raabta_poster.jpg",
          },
          id: "19",
          artist: "Arijit Singh",
        },
        {
          name: "Humsafar",
          img: {
            uri: "https://qph.fs.quoracdn.net/main-qimg-4a8c3ce3bbb6315bcd4b782a5bf93261",
          },
          id: "20",
          artist: "Akhil Sachdeva & Mansheel Gujral",
        },
        {
          name: "Taki Taki",
          img: {
            uri: "https://static.billboard.com/files/media/DJ-Snake-Ozuna-Cardi-B-Selena-Gomez-2018-billboard-1548-compressed.jpg",
          },
          id: "21",
          artist: "DJ Snake",
        },
        {
          name: "Believer",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/9/95/Origins_cover.png",
          },
          id: "22",
          artist: "Imagine Dragon",
        },
      ],
    },
    {
      name: "Jazz",
      img: {
        uri: "https://www.superprof.co.in/blog/wp-content/uploads/2018/06/drums.jpg",
      },
      id: "3",
      list: [
        {
          name: "Attention",
          img: {
            uri: "https://tecake.in/wp-content/uploads/2020/11/attention.jpg",
          },
          id: "11",
          artist: "Charlie Puth",
        },
        {
          name: "Perfect",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg",
          },
          id: "12",
          artist: "Ed Sheeran",
        },
        {
          name: "Love Story",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Taylor_Swift_-_Love_Story.png/220px-Taylor_Swift_-_Love_Story.png",
          },
          id: "13",
          artist: "Taylor Swift",
        },

        {
          name: "Sweet but Psycho",
          img: {
            uri: "https://i.ytimg.com/vi/zd-h01o7LtI/maxresdefault.jpg",
          },
          id: "14",
          artist: "Ava Max",
        },

        {
          name: "We Dont Talk Anymore",
          img: {
            uri: "https://m.media-amazon.com/images/M/MV5BOWQyYmJiOWUtNzkzYS00YWJlLWI5YjgtYTg4MjI0MmM1N2ZkXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
          },
          id: "15",
          artist: "Charlie Puth",
        },
        {
          name: "Blank Space",
          img: {
            uri: "https://lh3.googleusercontent.com/mBOJa7zx1cZzdOycV53oMtWdnyT2zxCXCQjf5GwW_baplWe30FhOIMaS1q-MVJOOZd_S_h5-j5L0u1oikh2EEL-vNtbuBGEHnqRDd9cDzB1i3KA5Xxnurh9SwMbulFtrJg=s412",
          },
          id: "16",
          artist: "Taylor Swift",
        },
        {
          name: "History",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
          },
          id: "17",
          artist: "One Direction",
        },

        {
          name: "Tera Zikar",
          img: {
            uri: "https://a10.gaanacdn.com/gn_img/albums/jBr3gybR1m/Br3glYkNWR/size_xxl.webp",
          },
          id: "18",
          artist: "Darshan Raval",
        },
        {
          name: "Rabta",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/8/8b/Raabta_poster.jpg",
          },
          id: "19",
          artist: "Arijit Singh",
        },
        {
          name: "Humsafar",
          img: {
            uri: "https://qph.fs.quoracdn.net/main-qimg-4a8c3ce3bbb6315bcd4b782a5bf93261",
          },
          id: "20",
          artist: "Akhil Sachdeva & Mansheel Gujral",
        },
        {
          name: "Taki Taki",
          img: {
            uri: "https://static.billboard.com/files/media/DJ-Snake-Ozuna-Cardi-B-Selena-Gomez-2018-billboard-1548-compressed.jpg",
          },
          id: "21",
          artist: "DJ Snake",
        },
        {
          name: "Believer",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/9/95/Origins_cover.png",
          },
          id: "22",
          artist: "Imagine Dragon",
        },
      ],
    },
    {
      name: "Classical",
      img: {
        uri: "https://images.thrillophilia.com/image/upload/s--PAtBIhcq--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/141/705/original/1548157147_3.jpg.jpg?1548157147",
      },
      id: "4",
      list: [
        {
          name: "Attention",
          img: {
            uri: "https://tecake.in/wp-content/uploads/2020/11/attention.jpg",
          },
          id: "11",
          artist: "Charlie Puth",
        },
        {
          name: "Perfect",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg",
          },
          id: "12",
          artist: "Ed Sheeran",
        },
        {
          name: "Love Story",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Taylor_Swift_-_Love_Story.png/220px-Taylor_Swift_-_Love_Story.png",
          },
          id: "13",
          artist: "Taylor Swift",
        },

        {
          name: "Sweet but Psycho",
          img: {
            uri: "https://i.ytimg.com/vi/zd-h01o7LtI/maxresdefault.jpg",
          },
          id: "14",
          artist: "Ava Max",
        },

        {
          name: "We Dont Talk Anymore",
          img: {
            uri: "https://m.media-amazon.com/images/M/MV5BOWQyYmJiOWUtNzkzYS00YWJlLWI5YjgtYTg4MjI0MmM1N2ZkXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
          },
          id: "15",
          artist: "Charlie Puth",
        },
        {
          name: "Blank Space",
          img: {
            uri: "https://lh3.googleusercontent.com/mBOJa7zx1cZzdOycV53oMtWdnyT2zxCXCQjf5GwW_baplWe30FhOIMaS1q-MVJOOZd_S_h5-j5L0u1oikh2EEL-vNtbuBGEHnqRDd9cDzB1i3KA5Xxnurh9SwMbulFtrJg=s412",
          },
          id: "16",
          artist: "Taylor Swift",
        },
        {
          name: "History",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
          },
          id: "17",
          artist: "One Direction",
        },

        {
          name: "Tera Zikar",
          img: {
            uri: "https://a10.gaanacdn.com/gn_img/albums/jBr3gybR1m/Br3glYkNWR/size_xxl.webp",
          },
          id: "18",
          artist: "Darshan Raval",
        },
        {
          name: "Rabta",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/8/8b/Raabta_poster.jpg",
          },
          id: "19",
          artist: "Arijit Singh",
        },
        {
          name: "Humsafar",
          img: {
            uri: "https://qph.fs.quoracdn.net/main-qimg-4a8c3ce3bbb6315bcd4b782a5bf93261",
          },
          id: "20",
          artist: "Akhil Sachdeva & Mansheel Gujral",
        },
        {
          name: "Taki Taki",
          img: {
            uri: "https://static.billboard.com/files/media/DJ-Snake-Ozuna-Cardi-B-Selena-Gomez-2018-billboard-1548-compressed.jpg",
          },
          id: "21",
          artist: "DJ Snake",
        },
        {
          name: "Believer",
          img: {
            uri: "https://upload.wikimedia.org/wikipedia/en/9/95/Origins_cover.png",
          },
          id: "22",
          artist: "Imagine Dragon",
        },
      ],
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
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("MusicCatogList", { item })}
              >
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
                    style={{
                      fontSize: 50,
                      fontWeight: "bold",
                      color: "orange",
                    }}
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
        dotColor="orange"
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "red",
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
    backgroundColor: "black",
    width: "100%",
    height: 240,
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 10,
  },
});
