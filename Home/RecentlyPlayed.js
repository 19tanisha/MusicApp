/*import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "react-native";
import { Surface } from "react-native-paper";

export class RecentlyPlayed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let categories = [
      {
        name: "Dusk Till Dawn",
        img: {
            uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
        },
        id: "1",
      },
      {
        name: "Friends",
        img: {
          uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIWFRgVFRUYGBgaGBwZGBoaGBwYGRgYGhoaGRwYHBocIy4lHB4rHxoYJjgmKy8xNTU1GiU7QDszPy40NTEBDAwMEA8QHxISHDQrJSs0NDQ0NjQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEIQAAIBAgQDBQYEAwYEBwAAAAECAAMRBBIhMUFRYQUicYGRBhMyQqHBB7HR8BRy4RUjM2KCslJzksIkJTRUdLPx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QALBEAAgICAQMEAAQHAAAAAAAAAAECEQMhMRJBUQQTImFxgZHwFDJCocHR4f/aAAwDAQACEQMRAD8A42AgIs6T3ghCLAYWjogEdAYgEWKBFAgFCWhaOtFAgVQ20W0W0W0Y6G2haPtIcRWCAkwE6StjcRXRRdjaYeJ7SdicrEDgBI8VWZyWJ/pKxmUpWefmzyk6jpAzE7m8AYkUSTmFtEvHqtxbzEaOUAaLGHxrpxuOR2/pNnDYpXFxvxHKc/YGPpMynTSNSaNsWaUdPaOljbSphcXm0O8tgzRM74yUlaEhFiRjEtCLEgIIQhABYQiwGEcBARYDCKBFAjgIDSEAjlQnYRAJNSG+o87/AGjKoiyxbSRxqfGIBApIbaLaPtC0Y6I2Nt5gdpYosbcOE2Me9lM5upuTykSfY4vVza+KGpykYjqZ1iutvOZHByiMiKBJMnd6xgU7wFRYCajrGV6WU9JMliovwOktvhwy6x0bqHUtGVlktNeckFAg/vWSlB4fmPCCRKgS0qYH2Mt0qmtjKNOrwYecs6aHhLR0wlXBejY2k948yjpWxsIsSAhIRYQEKIoEBHCBQRwEQCPAgNIAIoEAI4CMtIAJNS46kf6ssYBJaS76X8wPzjKoYw1gBHsusQCBSQloWjgItox0ZfaXDwP5f0nP1NvOb/azW18h9/tMQLew6zGXJ5nqdyorCS7xrjveclVLGQcqQxH4R9Okb2vl8dj5x1MqDfTwlzB41cwuo9I0jSEYtrqZdp4AKvAnjykNTFovXp+gmqzgiYjYJiT3QSWvmJPppwmjVcHbki4pdCFbHUn0bTy/SNqYcgBtbHa+h6X5S7TwGoLWuNtOt76+MtVEupBi6W+SVik03I5yoNOsfhsRwbaSYhO8ee8pbHSQ9HJJuEjZoPt6H7GW5l4R72mnT2lxOvFK0BiGPjTKNRsIsICHCOEQRwECkhQIoEAI8CMtIAI8CAEcBGUkAElpjfUedvvGASakOFvoD+cZVDbEm25vb1MvJhVI0R2v8wIAPgOXjKV7G44G+stuFCnKjgne+qqNzbT84gafYrVaeViOXSx8xzkZk1R81tALADxtxlDtKoVQ25H0/roPOPgcn0xtmH2tigWsPl0/U/vlKtDfyleodZJQac92zxXNynbG1vi8BDU2+0dWF9ZJgl1h3ElcqJ6dFgCQoAI46na3hxMrJTymbirpKbULuB5+kpxOiWGqo0sMdBLIWVsHWLJdR3uR016y2mwuLHjbXWaI7oU0hLRrCSyJ4y2YeP0fx/WZ7JbXnf6GX+1176/vjI2p5mVeQ18zMnyeXkjc2hEGW01qW0zqq989LD6TRw+0qJvhVNocYhjyI0xm7EhCEBDgI4RBHCMpDhHiNEeIGiFAjgICOEotCgSZHFrH8r/eIiX48+F4jrYwKC+txL5xSG5Z6huDcaBdRt4TPEuJjddVUCx+FFuNDzEGKSsqSh2t8B66fUH7S/M7tl7IPGKXBGZ/BnLVJKq90H97SKoNZLUfS3Kc54q7iUjw/dpYprlMiwqHN+/GXcmdSBuPpKSNIRtWXcPUvDFUxuN+kpYNzL1ZwFJO0tO0dcZJx2JhXYDKNLtfMfrL61VvbMLzIwzu7XCi3AHb0mj/AA2f4zfoNAI4s1xNuOi3GssWlSVRZRYQaWdHbZkdpJ3185UDd8nylvGPd/CUCePWZPk87I11NryWiBmPiD9BLmG2lSkOPGWcM3CNGmPknMaY4xpjNmNhFhAQ8RwiZTvY67dY4RlIcI8Roj1EZaHCOEe+HdWyMpD6DLu1z8thrm6bzXxHsvjERajU7KVLMSwGQDXv3OhtrbXlvpC0N5IRq2t8GWm3x26a/aI++9+sdTLW0YAX4xrE31N4y1yPoMNQbaiwJ2BuDf6S++JUkg1SRYgqEsDpawPKZol331M5u6irrY5SWPAW13gKS2UZndsLdPOaMp49br5xS4FlVwaOXdDuOcgA1mjiWCKBx4frKVJLsBzP7+8waPGnGpUW6XcZOt2Phaw+/rHZspDrsbE/ynQ+htG40G+byHhbb84uDN1KNwB/6Tv6HWV9Gi0+n9BUYBzbn/WaKOCLGYlQMpsdxp4jgfSWKWIgmVDJTpmzSCjYCXEUzEpYrWaS43TQEmWmjsx5IlwyljMVbQQfEm1yLch95XSiWN2jb8FTm3pFKsNNd2/IayOqlreUsuwLeBsOnUxlRblZBxtXZNky38AfyjsPrr4GPfUHzH0kWDU5R4Q7mtbSL140wpnSKZRsNhFhARebIzAk/NbfTLl3PLWAZNTZb5F8MwIvbyvKQjxAaiXAi5Li18t+tw9j9CJ1/Z3Z64fCNjSF94wK4e+wzaB9dM3xW6Ac5xlzlsAWtfjpfoJ6L+IKhcFh1XRQ6AcrCk9opcpGOZvqjDy9/h4IKGAw6YB8UgId2HfZu8o96ENiLZb63466kzD7T7Yr1KKpWqlmKhiO6LC6lFKgbkd4k/5es6HDuo7FBZcwBvl4E+/0B/y3tfpeUewMDR7QSqrotOulmFRAVDZ76st7E3Bv4i1ok6tvyZY5KNykrSb34/4cmhIF9PPUwIZmAsSxtYAXJ5AAbzY9ncKRi0pVAjAVHR1IDAlQynQjgRfymp2/j6mExje4VVVVXu5QFN1ub2APneW5bpHZLO+vpirdWjlsTh3psUqKVYWJVtDYi4+k0sPh2qtkRaRLBiFUXcAAn1nTfiTU0oCy9/MTp3jlyWANrgXY6eEb7CsVrtTFHKpQnOSC3dK2XoNTpJ6tWZ/xEng92t/6OHXDuVZgpypYM1tFLGyg8rmUsXsPGdvifaZ8NUxNGnSp2NZyCbkhixzM3/FrqBw0HCc32C9KpjaFNwlQO7K6k3vdH1NuN7GU5atl+9L23KapcrfOjicSM9TKOGgG5J5AcZMcE9OrkqKyOtmKupVgpUMLg7XFvWdz7Tdq/wBmdoH+GpUVRUT+792ozZgSxLgZ78jfTlwmx+LrD/wwCJmqByz5AamWn7shA24W7nTnbrfFPZ5im5TWudnluOICrc21uPr+ssjsrELT/ifcuKIKqXK5VJbQWv8AENNxpqBxnon4SMr1cUjKrBBTKkqCVY5wxBIuL2H/AEiR+yXtDQqYPE4TtBz7pQx94+Y9xm0XOb3qBtVG54DuwcthkyNSdLijyzFOGAPEaeXCJTpk2A1J0AGpJ5AcZf8AZ9KZx+HQAVabYlE76Cz03qBLshuASrXtwNuU9E9sMQcBjk/g0p0lWiGKLTUKzM1RTmsASCAOPCC2xJuUqS3Rwbdl1aThK1NkcqHCuMrZW2NuGx03Fprdndl1KjBKaFmNyFFr2AuTrsOpne/iJjGfB4Z8qg1SpY2BIBTOQrHUagbb2mZ7B4xqeJSmFFquYMSozaIzCzb7rttLT+NnVik/Zc0lav8AscXjaDK2VlIYGzAixBBtltwN9LSfGYZqRZXVlYD4WFjqLg25WnU9u1zS7WqOqozZ6Vsy3C3p07sBfQ6nXfWaP4q40q1GkAuVld2OUFu4RYBjqBrewjva+y/el1R1/MrPI6Js5BPG3pYj7zXwfZeIrX9xRepkDMci3Atc77X5Dc8BNL8LbHtIKQCGSpmBAINlvsetvSdPT/tQ9o4xcK7rQU98AIwFkBCUhU7i1DfTYC922AOd0cjzdNpL92cFVw9SmFFRGRmUOAwKtluy3KnUaqd/HYyPBnujx+8v+01PErXdsUpSowDMpcPkW2VVzAm9go6nfjMzB/AejfpLTOrHJum/BeQb+MDFWIZZ09hLQiwiEAjxGCPEZSLC5d7kdJ3OBxq47AnCkj+IpAFATb3gT4SCeOW6nrrsZw69EvC5VgRdSLEEGxB6EbGJqyMmJZEt01tHQ4vtsDBJglDZwSapYZcpFQuEAOt72v4ceGp7CuuHSviqpyU8qopPzkEkhRx+UC3EnkZzD9r12ILMrsNmejSqMLf5nUt6mR4vHVapBquzEaC50Ucgo0XyEOm1RPsOUXDhN2+/+Da9n8S1THpUsBnrOxG5XNma1/O0tfiDhKoxBcq2RgoVtwWAsV02PQzncJXZCrLUKspupGpB58vWafantPi6wAaplAA0S65jb4mI115bdIU+q0U8U1mjKFUlRv8A4mkBcM5NkUOGJ2F/dkf7T6TI/DnFo2OYJmICVBcqdQDTsb+vjacL7WY4kJSz3HxMM5bvWGW4OxsT+xMzs7t3FUKi1adZldDpqSCOKldip4iZybS6UeflnKEPZT0rv7tmt7f4TFU8ZXaqtRUas7UywORlLMVKn4Tpw3kf4dn/AMywv/M/7Wmf2925icZVNau5Ztcq/Iik/Aq/KPqeJJlfsxqiOrU2ZXBuhS+cNewy21vra3G8jkwSlJUz0j8UuwcS+N96KZNJkUB7gIpRTmzMTZBbi1h1mp+MDFUwtTKSAtVSwBygsKRALbAnKbc7HlMztfsX2gxlFWxCgqqj+6V1Vmt87IDlLHexOmwA1Eze3PayoOzv4CufeYhms1yG9xTRlZVdvmq93bcA96xFo06oFJxppq0a/wCBr3qYv+Wl/uqzkvar2f7UQk1qDLSXMUyWNGmoBYnukhTYXLNqbakmY/ZHaFagGelVemxIBKOyk5bkA2OouRoZc7f9scdi6a0q1S6JuFXJnINwz20YjhoBpe19YmgkpJ9Xkp+yzf8AjsJ/8rD/AP2pO8/GbB4hcTTxCI4pe5WnnGqioHqHKwG2jC1xY30nmOHrOjq6sVdGV1YbqykMrDqCAZ1Ha/4g9pYimlNq2QKtnNMZGqEH4mYajhoth05LdkfJSUkd1+I1Zk7NwDlSbGmG4WJoH02MxfYHtOnUxuHUEZszaZTc/wB1UO9rcJ522Jdvjd2BNyC7G55m5ki1ihDozI6kFXTMrA23Dg3EpNpUawyyjFxvTs9Z9rMBUHaDuy5UZqbB20Qqq00OvPMCLbnSw1El/FzCVCaNUKcioys3BWLKVBPC88u7e9pcXjMnv6hYIoVQO6twLFyBux4t10sNI/t72oxeL92K73FNAoC6KSBYuw2LHifS0fU9fRXuyfTa4VGx7A0MUMWXwwJKIc7BQ5CsRoobuh2tYEkAak6AzqKi49u18I+KpMgzsaaizIoyHMcy90t8NzudNALCeddndv4mgAKNVk7+dihKs5ChVVyPiVe9ZTp3mlztz2z7QxTA1K7KAAAlMlE0FiSFPeJ3ub76WGkRDd3SW/1Om/FPTG1b8Vp+mUC/qD6TnaFOyW6/mZWoVqlVe+7OwFu+xY2BOgJ2G/rJxVIYLwb6NNI8HfgSjFX4os0xYW8YjRwjTLOnsJCEIhCiPEYI5Yxosqjc/rBhrveRqjco9ib6xloUR4jUW/7848L+/GM0TJUuLjNb66xXQ5XcsCFBPjYX/IfSOR9B3rdMoP1mL7RV7IEU/Ha/8oPHztE3SszyT6YNmRi8PWdjmKkgM1r7AZSRtr8SiRr2XUvbu3zZdzvYk8OFpTAIFwbac+BNo73J204/Sc54e2y0vZ1Y5O7o4DKb6AHieAAuLk6ayasjUGyq9nU3Z0bYjYK4+02quJSmjFbBDhKYQnTMwfVfHNcnjKVLAoawUKWz4U1cpuzK7IWC8yQbEeMLKUkkV6XtNjURqaYmqEcWYZydOhNynUra/GYwE6F/8XAkogzKgYZAAT7zLqALXAtI8KgfFpSemgVWZMoXLdQHK5uJO2sCL7mQjdw9SB9/sJEovNvGUz7vC50Cks6P3At8rqArWG9r/WSdp00FZKJohQtcgHKVDU2cWS1u9/Ny57wG5WYOWHu/D96Tc7UpBaNQZFXJimVTkAIQqWAva5Hw68rS3jaP/qW92uuHpMDkG9kDFdNOO3KBNnLuLSxVzZdTfUcD9CdLeE2uzMOpp0wqlWZKuZvdBg1ruveYW0CkC2swnAy6Hl8xP0tAdkN4XhCABeOpnURpiQGnReGIZHzL49OvrvLyYlWtrY6Ecrg8P3wmQtS+hF+AI3/qI+o4ACjhv5/sSlI3hlcfwOnMaZzGGxrps2nI6j04TdweNWoNNGG6/pzEpSTOvH6iM9cMswiQlGwokiNbzFpEI4QBFq44sfKBFz3bmNAXa1z4yxhsQELabjTjb+n6CMpPwRagkHQ8RHBz++knGLQA2S12vw2BQ/8Aa+n+ePGJQq9xqSbaC+U5So2tpl5/NHZSk/BXD7dJyHaWNz1Gbh8I/lG36+c6/tftBFpVWC2LDKvdUWDKygaciwP+mc3/AGnSzq3uzoDcWW5JZW0IItswvybymc32OH1uR6h+ZlLci3D9mKWN+flER7C371Fo4VOnEfQW1mZwDqddwNCbXva1xfa4B0B036RFq1A+YM4c65gSGN+u8ar/AA9P1vHFwD5EepJgAzW+YXve9+N+d+celVg4c3Y5sxuzAk7/ABDW/W9433mnXX62/SBf7fQWgBYxeKLd1VyJmzhMzN3yLFrtrImq1HIuzuVFlJJJUXvoTtI3a/76yShXygi2/H/Sy+ejH0gBHWqMzFnYs3Esbn1MPfNtma2XLbMfhvfL/LfW0sjFgCwS3ezWB0sGzAfmIgrjIwN7km2utjktfThk58YAQNXcqFLtlGoXMcoO1wNuAivVUjb8t/3eTvib5yFPe21GgysLaDUd4egi/wAaLg5ToDx4kKPzU+sAKcIMbknrEgAsSEIAKrERphEgKxI+nUKkMpsRGQgF0av9st/wj1MSZcIWzT3p+TrRHCMEcJseqiwEA+b6RVTfkOMjV/8AKPSWKx7i8LmMaYJTHzG2mkSS17ZgDpcAeEjFOzBTzgaRkY/tE/cRebX9B/WYAInSdtFfeKuUEZW8eEwcNbONBv6TKT+R5XqpXlf5EItF0ktZwLqFGjHXjFCKEDW1zW1vb0knOQoRcXva4uBva+tutpv4yphXIUMFQM+UDRTdXKswUXWx9yvPfTS8yMXayEKBccPLT6xyKoVGy3JYg8dr8PKAF0rhGdVUDK2IKnWpmFIhMthc8S42LbRa9HDLmBAzA0hlDOCt1X3lgb3IYMCp1APQTNZFL2Gqk/nJqCqHZMot9YAaATA5mF1ygCxvUsSGqAm/VTTPlpxEz8YtAU6eQjPbvjvHXKvE6fFm0H6SLCEZxoNb+Ukw6rmcFQd/QHaAqKccBp4mPwyhnAI0N9PImWADlYZVsCbcwNdfSAyqw1No0LpeLm1vEUixvAAcDS0HAHpHPTbKGtptfSSphi4uCeVsrH1IGkAK9tLwddbRb6WiOdbwAGUa9IgUadYOQYZhYdIEihRe0QKNekM2t4oYaxAMhEhGB1YjhGCOE2PZRaDHTvAaR7PcZSeoP2lcIvPhfnBhYwBFgtdrkgAdb6CK1W7huFx6SsDJqKg7/nb7GMtGP25iUFcEG9l1A5nXf0mNScBw3C95sdp9pJnKmkrZRlUk6aZRmtaxJA338JU/jqdj/crmzsw0WwUoVVdtbMc1ra2mD5PIyy6pN/ZTxBXMSDfWSJUTJlJN73Es/wBo0/8A26fTp/l12+sqLiSGJUAAkm29gToL8hAgkrMCiEcO7aTYKmKgWlmytcm50UAXYknkBc+UoM5Opk2CqIH798hBV8vxAMLZhfcg2NuNrQA2h2RhgRkxLlwfnw7ohtwzalfEj0mZUdUqE3udQQLHXodiJsYzt5kVUpY2rXJOrWamEUC2UZrlmPEnTTrMLH1KbVHNJCiE3RTqVHL1vAlWR0XCuG4AydKiB2N9CDr9bSrcQuIFD6JUG5JA+v0kpqKucZi2Yb246yLDBC65yQvG3gbeV7X6XluvTwtmKu19cqgEDY2BJBvrYXvrrtADPhNN8LhQ1jWYjNuBfu5Qb6LuWv4W15yvWp0AhKOxbKpCkfMSc4JyjYWgKyJz3F35Hax48NeA3kiUyUuLbHXLqANbZiftxkda2RTYDwFv/wBjlQhdUXY6k96+tja/DThwgIgZySTfc3PnGQiQAIQhEAGAgYCABCF4QA673D3Iym43Fttz9j6QFJ9O6ddtN/3cSWnirF2IHeOawva/eB46aM3ONGKOmg0Qpx1FrX33tNz17Y/+8A+HQAg6bWsD6Ej1jXuLZlsevjEOKJDAgd4sTv8AMVJtrzQRa9cuQSBp48TfiYDViZ+kkpOADc28yL+g1lcGWKQYC4PXQE897eECm9HGOxJJOtzEgYCYnjCwikiAIgISXeyMQEr03IQgOL5xdAD3cxHS9/KU7iT4OpTV1aohdA12QMVLLyuNv6QKOi7UxaPRqK+LouQAUSnQyMzhl+bKNLX/AD4Tm0tYeWvLe/2mqcZhGpVQMPTpPlXIc1R2Y5hcLc2U21v+cxIkJD7C3px6m8dlW55A8+F/0kUUG0YxxUW8yN9v3rHMq3t/Nx9JFCAEuRbnlpbXp4+EiiQgST1fgXfzAttzteSJV7hGexynTKvUWzbkkW9ZVLHa5tylqmxyWI0s1u+i8/lIzHXrACnCEIgCESEACKIkWABeESEAOqUE6AXPTWPekymxUg8rS1TJ9w3Rx5aCHaTm6G5vkU3685ueteyuaD5iuU5hqRx5xoB2sfSa4J/iONimvXSUez3s5LX+Eg6XNzzgCkRNSdQCVIB2Jh8jd0nQ7X006cZNWRfdKwzfEV1PIHW3DwlVgcj25H5c2tor0EpfFs5KLAwmJ5IQhCACza9n6VNyqmmtRxVR7OyohpANnuSddcptrtsdRMSW+yqVJqyLWbLTLd89ACbabXNhfheAM3+1KaNRqEt2euUBlGHF6jHOoy34CxP0nLTfr4fCvh3q06YpEEBS+IzMzXGZFp5Rc5Te97beXPwQIWEIRgEIQgAQhCIAlqmTk+O2h07u/euN77W9ZUhAAiRYkACELRYAJFMIGACQhCAHoPZX+E/if9olLtD5f5YsJt3PUXJqv8dLwb/bK/Zn+LU8/wA4QiEhO0/gP/M+xmHjP8N/CEIdh/0M5qLCEyPLCEIQAIkIQATj5R0IQAWBhCACRYQgARIQgACBhCACQhCACwhCABAwhABIQhAD/9k=",
        },
        id: "2",
      },
      {
        name: "Cheap Thrills",
        img: require("../assets/favicon.png"),
        id: "3",
      },
      {
        name: "Perfect",
        img: require("../assets/favicon.png"),
        id: "4",
      },
      {
        name: "History",
        img: require("../assets/favicon.png"),
        id: "5",
      },
    ];
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            paddingLeft: 5,
          }}
        >
          Recently played
        </Text>
        <FlatList
          keyExtractor={(item) => item.id}
          data={categories}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <Surface style={styles.surface}>
                <ImageBackground>
                  style={{ width: 120, height: 120, borderRadius: 10 }}
                  source={item.img}
                  </ImageBackground>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "600" }}
                >
                  {item.name}
                </Text>
              </Surface>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    width: "100%",
  },
  surface: {
    width: 140,
    padding: 5,
    backgroundColor: "#2d2d2d",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default RecentlyPlayed;*/

import React, { Component, useState } from "react";
import { ImageBackground } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Surface } from "react-native-paper";
import { AntDesign } from "react-native-vector-icons";

export default function RecentlyPlayed(props) {
  const [songname, setSongname] = useState([
    {
      name: "Gorgeous",
      img: {
        uri: "data:image/jpeg;base64,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",
      },
      id: "1",
      artist: "Taylor Swift",
    },
    {
      name: "Perfect",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/8/80/Ed_Sheeran_Perfect_Single_cover.jpg",
      },
      id: "2",
      artist: "Ed Sheeran",
    },
    {
      name: "Love Story",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Taylor_Swift_-_Love_Story.png/220px-Taylor_Swift_-_Love_Story.png",
      },
      id: "3",
      artist: "Taylor Swift ",
    },
    {
      name: "Sweet but Psycho",
      img: {
        uri: "https://i.ytimg.com/vi/zd-h01o7LtI/maxresdefault.jpg",
      },
      id: "4",
      artist: "Ava Max",
    },
    {
      name: "Attention",
      img: {
        uri: "data:image/jpeg;base64,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",
      },
      id: "5",
      artist: "Charlie Puth",
    },
    {
      name: "We Dont Talk Anymore",
      img: {
        uri: "https://m.media-amazon.com/images/M/MV5BOWQyYmJiOWUtNzkzYS00YWJlLWI5YjgtYTg4MjI0MmM1N2ZkXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
      },
      id: "6",
      artist: "Charlie Puth",
    },
    {
      name: "Blank Space",
      img: {
        uri: "https://lh3.googleusercontent.com/mBOJa7zx1cZzdOycV53oMtWdnyT2zxCXCQjf5GwW_baplWe30FhOIMaS1q-MVJOOZd_S_h5-j5L0u1oikh2EEL-vNtbuBGEHnqRDd9cDzB1i3KA5Xxnurh9SwMbulFtrJg=s412",
      },
      id: "7",
      artist: "Taylor Swift",
    },
    {
      name: "History",
      img: {
        uri: "https://upload.wikimedia.org/wikipedia/en/0/00/One_Direction_-_History_%28Official_Single_Cover%29.png",
      },
      id: "8",
      artist: "One Direction",
    },
  ]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "white",
          paddingLeft: 5,
        }}
      >
        Recently Played
      </Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={songname}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("MusicPlayer", { item })}
            >
              <Surface style={styles.surface}>
                <ImageBackground
                  im
                  style={{
                    width: 120,
                    height: 120,
                    justifyContent: "flex-end",
                    padding: 5,
                  }}
                  source={item.img}
                >
                  <AntDesign name="play" size={24} color="white" />
                </ImageBackground>
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "700" }}
                >
                  {item.name}
                </Text>
              </Surface>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    width: "100%",
    marginBottom: 50,
  },
  surface: {
    width: 130,
    padding: 5,
    backgroundColor: "black",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
