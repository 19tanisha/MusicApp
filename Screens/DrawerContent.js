/*import React from 'react'
import { ColorPropType, StyleSheet, View } from 'react-native'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {MaterialCommunityIcons, Ionicons,Entypo, FontAwesome } from 'react-native-vector-icons'
export function DrawerContent(props){
    return (
        <View style={{flex:1, backgroundColor:'black'}}>
            <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
          <View style={styles.userinfo}>
            <View style={{ flexDirection: "row" }}>
              <Avatar.Image
                source={{
                  uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABelBMVEX3lB3///8rEhYAO1nfr4cREiTQn37n6egAAADa2tv2jgAAPFn8lx0AOVtCSVEAOlgAM1kAABQAKU32iwAAABcVABUANVUAABr/mR4lDRYjBhALDCD3kRApEBYaAAnmtYssEBIAMFINABWpYxv2nDUgAA4cBBUAMlP9+/X2mSv89Orpix364sgVAAXDl3bVpoGITxrKeBwnFh0YKj72smsAAAyUlJofIC9dXWZqanP50qz77Nv62rv2unn4voX3xpOXVxpdMxi6cBu5j290Qxj2o0ZPNCxsUECuaBtCKSZmRjwdJTXVsZnaw7IZKDuUo624eTVqgZCncjo/XnR/kp4AIUiNjZV5eYE6OkZPUFr3rmD1qU+AShg3GhVMKBZcMBeIZlKheWCXcVlJLyp+Xk2ih3YzRlaMem/EgC9wXkjBw8RWcYXUrpTh1c4kQ1NFTk6ntLtcVErJ0dN6YUOPaj0rUWo5S03YiSQJQVKxmHUAHk7Oo29HZnupqa8yNKy4AAAW3UlEQVR4nO2diV8TybbHOySQFdsEyN4QkCUkLIKQEBYREBTQcVBIAo4LjnfuiKPDzZVh3nv6v7+q7k7S3bV0LY3vzXzuTxEImNQ3p+qcU6erqhXfTapYWltf3by/cfZyfHxa1/juy7ONzdXVmbVi8UZfWrmh5y2trd5f2lUiA5FIJA+kdAS/Aw8ORJTdpc31tZvCuwmwtdUNgASBFKp0wOmX99dLN9AIr8HWVs8gEp3IjgesF9tY9RrOS7DizMb4ABeUlW73/oyX3dIzsOL60rQYVJdtfGPGq+Z4BTazxNf/iHD5+2vetMgLsLXN6QEPqEy2gV1Pxps82MwZv7FiUES0iLIhbzZJsOIq58CCQOXrhe3t7YXrskLCy0d2ZUebFFhpU4kwwaShYuCL8vbdrUw8PjY0NDQWj2tbd7fLeLb8wPiqlJOUACuyYMXSsfLC4wd3f7r7YHvhzlZmaDKj9bSlZSbHMlt3ymksG0D7PwHbzLtiQQs9fJUZGpqEAlayQHUEWLcWsGbLR8bXvzvYqru1Ysr21thQBgdjl5YZfL2t4K0mPNbEwGZ2GbDuvBrLuDF1zDb2egHbIfORMzEPKQJWWnL1hLH0dmGIGcvokVvlNO6p8pHN7wS26u7gY+U3Y649EEGLP8D3x8i0QH/kBlt76e4K09uTXNZqawj0R+wTRja4kxFesE2GeBy7y28u02hDdwhkCq9/5AMruTsNoK0hMSyosa0yPhkZWOKL11xgq25zYmiu8utJca6enskCqTuOc400HrANBnPJcoHuOLmNJ+Nzj+xga+Ms3VCR5QLxOv4AT6YMnLF3R2awdYZuCLQlzQUUv0OY00TGmaM1K9gmk7liP3nB1aONPSbYLJ9n9Y6MYGcDTFx3xrzggmTbpHnoAONAYwIrMQRlyLXgERcgmyyTXmVgwzOw0jjjJPmVUL6BVeY1sXQQYXIhDGBrbG5DSd+VCMyIhkiuEboQBjJ3sBlGc8UWvOQCnfGa+FL5cffU0RWMlUuJbXnXEaEyW8TOyELmBjbD5A4h1/aYp1wgmi1QyBQ3MhewGSZ3qIMVBDN6ojKviaMMkE27kNHBmPuhEns85jEXyPQpJnPtjVSwNWZ7gRzR2xEGlXlIMRkgo/pGGliJvcYb2/bUJRrSMsQorZPt0sgoYMxxWfHeJRoaIiXDhiJnYmC7HEX58tgNcPVk3lDBlAgluyKDLXEMsNgDvqw+y+hB49S+SM2IiWBs8xRTaT5fP3Gwl2X6RZe+CGxGnMWQwNZ5uGILcR6u7H5gjs1mdL+oizTzJIDxOHqY/vL0xIn9+cDI3KsJFrRJF4uRnT4BjMMhAsV4gtjswfxIIBCYP5hlIBsjZ8KmIks8YCz1KIvK7FzZ0NuAqZ0ed7Qh4ky6S4a/ioYFW2XNfA2xR+fs7N7cSBssMHK+P+wy1ibvuoIpEewww4FxZBy60owlnInZvZ0uFiQL7DzqmaU5yMyWq/cgDDMcGE9k1vUG3xUtxtC0idnZRzsBGxdEG5k/3wuR0TKvGV4eG6cxYFwRDAo7xLLDE9nssKHZiZ799yhVm23u0TAJTSu4hGhdA5jiNwrG5+kVfHFKm907nwPa2TkH2pmbH8FTmWxze8MEMkqBwKJptDOiYC+5V6M8RnyHNnzeJhkZoTK19XYWDzZEm5N1FLnvDrbKazBcoji7wwJjM9o53vcz+HudDOmMTrASN5cSe+gcY8NvebkgGbY3umaLhvLjbmBL/Ku9kLwj8zM3FiR7hyObfMAEhoZpBxh78cYC5lzJMbwjAhYYwaX8k3fdA5mufIkKxh3CoMbsbck+4u+IuvowDmTyJ0YwZzCzg/F7DqCyfc6iDc+JcQVG3k+gYA/ZuiKSWdnAikLLKZ1gPwsaLBCYQ03GMCMzlX9JBuPOOXRd27vi8DthsJEDZJRlmC3myD+sYEURLCTxmBXtiViXzwGW3yWBiRnMAaZlhbmA+5CxmL0AYgEriWChYHsSYKjH5wGzmcwCJmYwJ1j2QHiIAbC3Tr/IA2ZLrLpgYi4RBRONYjrYjtMvcoFZHWMXTCiGeQwWCKBgrO4eamANAzYtxqUo9qKiHNjIz470jDnz0JVfQsG4KqQ2XTvAZAyGJB98YEqkhICdCW/isGce2QMpMGckY06CTbBNJxh3QYAIJmUxJKuaJK+KwKpTJGiDCfp6HJiU85h3WoxxPtZWJ0i3wYSxnGAT76XAAvt27zH0mA8sf2YHE3cdCJhAWcAqRx7MWPPoqu0+FFnX4QQbPpcCG3lkB6OuHMCCrVrBihIGc4BJJPc6mMPfDzHVFa0at4KJZh0omNYzLwfmKOnQFw7gZM6kFemeaAeTyoEDSCDTXvGDbXbBBCcshmK2zENyiDnTYI3looRd5uRFkfWJjiR4Qq4ngghts1jmDV981snWOmAbMj3Rtk4xuydnMABmcx58yb0hwy8qUom9Dma9njkr2RMDgT5bgOZNPKCMFB+CrfFdmXWCWS62aD2SWCCnsl4vZLzY4iQrmmBSzt52sUWi9NYBe2UFG+N2iopZh4Ng3FfEbEo/7IBpr2RdR8CRLE7wDzHT4UMwKYMp6deahwazg4n4DtPhK1JTMV2dQaHty2PZwSbZro45FTHAJIfYdacnyvv6gKPqEefOFA2wGR1M4FqfFazrFDVvwLqXEbWCWJtgJANguzJcwHd0GiJxncUCtte1GFdR0aL8BgSTShSBuu5Z2/cYTHCI6d5DkfQd1kxRdsqCgI0tiDarBMAkfcdDy1qICblJphNM6xEJz1BgTqb47kv5jrJ18crsuRdgndoA00IqPNg6AJOaZKZti1ckS29Oi7EsfSOAbQKwcQkupTxpTYC8iNBWML7ytkUgwVek6jjOlYqzYis8CGAicxYT7KVPKUnMWcBUTLMdl+BBX7SCCXp7BVa6FeYNYhiucmZMe2BbwT0r7fAtYIzrqHCKFBWJeke58PpOOW1b1Cdb4LblihJgAyVFIoxtwzN8HFszhZfltLks5TfxMQbmmorEZRb9aCJLdq+PMplFA1CWWcuk0GxMV2RdkYvPULYiheRkc+S9pfpG2QvtCraqyE1aFDiDti9X5F9dauGyXffTNNGUCoLJFTwUdOWslpXwjParY+QTB9yUv6/IzcYUzCLurNACU91gj+yXWiZ/EgZbUqQyKoNs0rGEYULwwsTIueMCtKYJN2pXkaoC60I3WQ2Lkc2FHM/DfaG2K3l7AV0j6+6HReK0vQasi7rHmyp5ewGV0RWvImS4tc7cV2q9FPZ8kllusgP07aGfpHDzYOgWEEjGF6hHHuF3twhdlfAKDL9XmIts5C1h107mjWiz5EcZadc6x7WyEdKeHeEgPe2F+yBsZNRCrMkVhQt4SqE2jXvg8IlnG2nZOSYyGhf18Byy8i89SKnuELeeshV3Rt7TuNzOiCCAbShS1TeoNLLLqiumYXZA5eLZBWIB25SfttBOo2Kp5h+QdjF2JBClwbRFeqK5QNsrHOpz6YZ9+7i4bJdAYgXAJEoDuvDhua1hetF7ZGeC5ZiIMe5cOLIuU8zRRRtirqsX3w0zHRKhveJt1cCaTPnN0Gta2+jluJ0Q4zEg3IW4SEmRW72CbLJyiFoa7ptjO65EwGT5oiKwjdYqShTTwciL1ef7+vr2GC3GPcrGi0pRLntG9wrbNPG+j+AXAVbf/CNWk3E6xvyZTxHbb9oF06hv+sRb2H68uYCwO4Sx4lsYkd8AYFIROlamn5YzfK4DzGOx+vp2mMH4yt36hb/7UqswqVEMVk/7Opo31GfRHFrmIEjj6ov6pVopf0+PYsB59FE179x8RAbjSoX1i+tSyyFcDh/MHriAMXsPvhrBdBEuYJGZapbph8oMv6ODcXgPnhKjsYBFZsmR2xCbmHMBQ7YuEsXjPfL3dTCJpc4uxwC59USgGwGDW5IUucXp1JO2tIkdN675fVbvwQW2JrsQs0xrljZ77mqwPmbvwTXGzKWzwl2Reka1pp3Pu4Mxew8Or6jvIYNgwrlH7A5liLn3QyhW78ETx/QdBVLL02mnwGf3Wbj6+pgO7ePLgvXd0BBMfHEO4QgxoOEehgEG9Z6pOMDlO6Y7W0CEE3zSuz2RfcuGBTvjAfX0N1Mclar8RgdMNA8mpPbZ4UfMWDraHvGItI6GeE+/0MFEzjZSSCd8asMHOwzu0Kr58z2Xqg7XsudSB6woli5iz1XM/szi5RGd71PdI0c1x9wwbGxlFMuqcJmitidApevdYqFQIIFxDDFzW60BJtYXcWFs4q2IvaD+0a/eq2oENo5dSeZGaHMftJjFMJcytV9ELfaL6vf7AVsPjo0drH1YiQkmVMHHgS32/1PQYKOAyx8Ff+8tomTsYO3DBkwwkbJpLI2CFap+VdBg/f6OqggZ+wXbfNEGxh+j07FfPxwiDSjc848ePxEx2FSXy38PeV7mxCPfPgKuDcaZL6Zjz3+53Y82AICpyfAnfrAVi8H8fqQrMu+Q6xx01Abj2roTU74kb6u4d7aQ9PunjoLBp3xYTy9GrVzRblcwv9A0Not1j6bqHC3DEcrSP36+TegyBYCrTrWCwTA72pNPweDRVNQCprafuFA9NNHcDog31T0/sgPGEco+9KtmA7Bg/uTHIBQT2m9P4a+2ElaD+dX2Exd+8KuG9RjP9cgXETBW9xErm+aCQhI8MMaAEhc6WfCTixuBttJ1NOW3k7XBQM/262Rspx1ZTp/tgq2zefzyZ5pfNsCSV8G2Pj3Fw/329NOnzi+FR/14sB7YAaLwVbRXLBYbKGHA2I6CT/9u4Yr+gILpYyVxGbTo06enT5/89psB9OTJ06efwkGbjglghar+bCqM2CwnIVvO27KCsXj89PPb1gYkEbCq0bCrIIfCquoAM52HYX/dZgWWc5ysp31awIoMJkt/tsUb/6JzkC0aj48+4wBDDBY1wRbVtq9UqwX3XXJWg9kOjmQw2XW/9c2N+tG+mDQa4ucAQwxm+AvoEy2dI0e67x/WYPYzTKddbxr86217C1S8WwQmO2bmeuY0WNspFezAiWu6/7AZzA7m6hhjPzrA/Ei6aPZF/0nYHclQEjFYVLOM1476/0U32cAaEcw1liFgUdRkSWNcmFFayGAqzmCAjJp9OE5AtoO57ZKL/djvbIQzrTJdNOiMF2xgV4jBjOcsHDofvv0rrS86zqx2HFntUu1GuyIapNujLPlV1GB6Dqz1RJ2P335OAXPeyNYBtsYNFlWdE95Fs0X2KM1hsOii0yUa6v9AHmR5500KnMfC0xfDATDkfURS4cIPxu8wRenLBPJ8hqtdRB+neQ/kthLIHQroFvsVGWMYB9LujAmGKI0xmD7E2j7IBvY7ESyP3IoMAaNOX7BggEyzG00zMgY1KmQwOGoLhyiXv/8WcYw5T7vH3SyDdvsgJECbcoyzgjnM3KP0iyTmfVoET4AxpF8lgmFuI4SC0erdeItB2QM18PmwkKYmXaI01mAgsy5geCEYyV4vEQrcDWkowSx2TQLz26uBIGuARoPlD5q+YgD6DwvtQcoKFsHceRJ3CyHyTfAoYLBQUXCSRU9aNK4WzmBRzZlLuYEN4O5nhb2bFXn+co3r+1ardctL+pyDHqVxBgM+cTGK8Rx+4hjD34EMC0ZeIFGmgkX9ltJ7YRF6bFpi1TrBPUm1h/QaKtbdI6GZAkYO02VyV2y/+j0w3dXhCj1gqCRfkME+4lyiinccUPgAjbvjExHMd0Yiw3cSR+OSh4u64QqHKiWxak3hTHOIdxxEMGeO6AJGKhPEPlP7ognmh4Y7hL1yUSVHaWfNTZdK5sLmiqRb/BFvN0nIhtMsYJ1GwqtdP5ASqzDWYCqlS/T/GwEj34mXeINQfGqV/oMDTFcymSQYDJ2vuKj/CwpGvHcy+ZauWAdiKysyKUpIrMK4GEYXOh9D787FAIZNGtP/4gWDvgQXpZGaGwPYjw4wbGR2B8O5xvQHfjBs+SPcz9un0dIAySG6gmHOAE3/WwDMj0msBAzm77fX3zD3v2MFQ51++gt+3kIXJkpH+Q3mqFIRHT0DGHoT79hzETA0Sj/jdx0gFNi4aLfvdgVDyHBlKgYlneUPEYOpf6bZudzAfCV72Zs0hXaTI0pjam7u6v8jzc7lCuawmSiYI7HClXDcwboZlTuXO5ivuGv1+tdiYPYofSliMJB4tJ2ii99gBPMVX1rIyoJgasJS/rgizkxo6iQe2JvuCoDZI7UgmLX8gS3hMICZ8XmAFpf5wCxra2PoVTo2qaOdKP1C7CluG1ehCXfsFgPrXuyM/SkI1k2sLrAVAQYw+Pp5hZz3ioCBWYzhHGN/iORUutqrP3BFUgapf0JzjRPnKYJgvpLhHGMC6b0pM0pfJFjKC6j6f48xuUNeMHMaExNJ700ZiRWuhMME9iFPTefFwcBAywum94b060qtUcFBevtLes29jUJgsDumv4iD6as/RA2mnvwXqbwhDwbrBc8lwNRouCU4wpLJS76WcoL5Zp6fiPp7oKnjIyGDqSdfg5wN5QXz+Y4TmIuNzC3E/F+1n6DOOzjFay4hMF/4RULCaBjdIugX42XUxBGvucTAfL7LpKhrw0iNKngZk1o1cdUSaaMQmN4fvwuYOjr1TKyFgmC+8Eev0GhgU2AaJ9hAUTCfr/X1RMKLdNVPBvtvkcElDQbQXiTQlWsCYPir+fnI/4QlGicDBtA+jkq7kaj/NkYniSMZLFkwMNaOAJq33h8Eu0T0mXgn9AbM5ws+i3rRI7tYU4kr/nh8A2BArSPVIzZAFT2W64OmPAEDZrv8eCLv/5OJ0aMLbxrkFZgPsr0AbP3GJWh+UwFbnXy8lB1ZXXkHBnV5dJUYxV5bpltqKjF1dSyUORHlLRhQ+NlR9CTBChdVk6OJxNXRpSfjyirPwaCCl8cvEifAdkmVFApUNZmcGk2cjH59duFd/7PoRsB0BVuXR1+vov6p0WTSmFpFofyQaCoZjV59PL5s3QiTLiV8gwoGw63Ly2fHAPBzNAqspwKeF1+Pjp9dXrTCwZt86bASumEtLy/HB1M5oF4g+Dk1GF9evumXDSm9f1P9B+yvJhMsZ370Wj739qZSvbnud/CrVPfb/+cywHLNXG/usGp+3f7Z4Mpp/LDZQTnN9VZXmn8VMgMsVVtJDdYH44O9g/FQvZqLx1O5eOgbUK0SiodCuVwo1GyBj/qtvxZYrlqPVxuNSiMEPhqVZqXSuFU5DZ+GQrXgSiXcOmyGw6cXzfBh87tazIgR8F/w2RwWZtwwB0wOBJJUCvw1P3d+3B5j8UpvrdYYbNRqoVA9Ve8NNRory81WuFGrHLZCK98umqHDYDiVy31PrlSt2ohX44fVZqqayzUazWpvNVU9BZ/g5xz4E6/VTxv1lfoKMEYdNH6lcVo/zVnBUivgpxXAdisVr+cqy4Pgf6SWQ6lwo3J6EWpeXCzHD4Ot6vfth7nTWqPyDbS30WjU6uDfWgNw1L41lyun9Ua9/q3eXFmpDVZqoOGn9Waj2QC/3KjErWC9uW+Naj13eFjJVcEvr/RWVk5TlVoddr9w7aJRuWg0W7fCy98VrDd+0ayANxwYBbzPK8Ak9TqgrK/0fmsCmtPGSqNaA5yAuw5Q67fAj8FPUzYwYPbUYb2RAx/LtVCtXgWj6bTSGIyv3EpVVuLLoEvWQo3v7BNBb+ttLjd7m8BTV6vNwab+0dsEX+uPwE/NW6fVW/FqMw6/ToHfNbi6ARpEqNxgSv8AfwbhaEoBLwkez8XB76biYGR+9yiWg3+NP/pX0I3o3+Y6P8oZaWjn0XYT/+6Zx99P/wH7q+l/AW2YHT5gkb+iAAAAAElFTkSuQmCC",
                }}
                size={60}
              />
              <View style={{ marginLeft: 10 }}>
                <Title style={{ color: "#ff8303", fontWeight:'bold' }}>Tanisha Thakur</Title>
                <Caption style={{ fontSize: 15, color: "grey" }}>
                  @tanisha19
                </Caption>
              </View>
            </View>
          </View>
          </View>
                <Drawer.Section style={{marginTop:100}}>
                <DrawerItem
                    icon={({color ,size})=>(
                        <Entypo
                        name='music'
                        color='#ff8303'
                        size={size}/>
                    )}
                    label={() => (
                        <Text style = {{color:'#ff8303'}}>
                          Music
                        </Text>
                      )}
                    onPress={()=>{}}/>

                    <DrawerItem
                    icon={({color ,size})=>(
                        <Ionicons
                        name='settings-outline'
                        color='#ff8303'
                        size={size}/>
                    )}
                    label={() => (
                        <Text style = {{color:'#ff8303'}}>
                          Settings
                        </Text>
                      )}
                    onPress={()=>{}}/>

                   
                </Drawer.Section>
                
            </DrawerContentScrollView>
            
        </View>
    );
}
export default DrawerContent

const styles = StyleSheet.create({
    drawerContent:{
        flex:1
    },
    userInfoSection:{
        paddingLeft:20,
    },
    title:{
        fontSize:14,
        marginTop:3,
        fontWeight:'bold',
    },
    caption:{
        fontSize:14,
        lineHeight:14,
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    sections:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3
    },
    drawerSection:{
        marginTop:15
    },
    bottomDrawerSection:{
        marginTop:450,
        borderTopColor:'black',
      

    },
    preferance:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    },

});*/
import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
} from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

export function DrawerContent(props) {
  return (
    /*<LinearGradient
      colors={["#ff8303", "orange", "orange", "#ff8303"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, backgroundColor: "yellow" }}
    >*/
    <View style={{flex:1, backgroundColor:'#2D2D2D'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userinfo}>
            <TouchableOpacity activeOpacity={0.5}
            onPress={()=> props.navigation.navigate('Account')}
            >
            <View style={{ flexDirection: "row" }}>
              <Avatar.Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYGXBks17207cStyw8yIWqeX4R7xKLXgHjw&usqp=CAU",
                }}
                size={60}
              />
              <View style={{ marginLeft: 10 }}>
                <Title style={{ color: "#ff8303" }}>Tanisha Thakur</Title>
                <Caption style={{ fontSize: 15, color: "grey" }}>
                  @tanisha19
                </Caption>
              </View>
            </View>
            </TouchableOpacity>
          </View>

          <Drawer.Section style={styles.section}>
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="musical-notes" color="#ff8303" size={size} />
              )}
              label={() => (
                <Text style = {{color:'#ff8303'}}>
                  Music
                </Text>
              )}
              activeBackgroundColor="red"
              pressColor="yellow"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="settings" color="#ff8303" size={size} />
              )}
              label={() => (
                <Text style = {{color:'#ff8303'}}>
                  Settings
                </Text>
              )}
              pressColor="yellow"
              style={{}}
              onPress={() => {
                props.navigation.navigate("Settings");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      </View>
    /*</LinearGradient>*/
  );
}
export default DrawerContent
const styles = StyleSheet.create({
  drawerContent: {
      flex:1
  },
  userinfo: {
    flexDirection: "row",
    backgroundColor:'black',
    height:100,
    width:'100%',
    alignItems:'center'
  },
  section: {
    paddingTop: 220,
  },
});


