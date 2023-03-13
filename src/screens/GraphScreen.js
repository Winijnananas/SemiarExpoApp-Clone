// import React from 'react';
// import {
//   SafeAreaView,
//   Text,
//   View,
//   StyleSheet,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import { BarChart } from 'react-native-chart-kit';
// // npm react-native-chart-kit --save
// const MyBarChart = () => {
//   return (
//     <>
//       <Text style={styles.header}>Bar Chart</Text>
//       <BarChart
//         data={{
//           labels: ['ผัก', 'เนื้อสัตว์', 'ปลา', 'ปุ๋ย', 'ผลไม้', 'ไข่ไก่'],
//           datasets: [
//             {
//               data: [20, 45, 28, 80, 99, 43],
//             },
//           ],
//         }}
//         width={Dimensions.get('window').width - 16}
//         height={220}
//         yAxisLabel={'Rs'}
//         chartConfig={{
//           backgroundColor: '#1cc910',
//           backgroundGradientFrom: '#eff3ff',
//           backgroundGradientTo: '#efefef',
//           decimalPlaces: 2,
//           color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//         }}
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//       />
//     </>
//   );
// };

// const GraphScreen = () => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <ScrollView>
//         <View style={styles.container}>
//           <View>
//                   <MyBarChart />
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default GraphScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     padding: 10,
//   },
//   header: {
//     textAlign: 'center',
//     fontSize: 18,
//     padding: 16,
//     marginTop: 16,
//   },
// });
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react'
// import { BarChart } from 'react-native-chart-kit';
const MyBarChart = () => {
  return (
    <>
      <Text style={styles.header}>กราฟเเท่งของสิ่งที่ลงทุน</Text>
      <BarChart
        data={{
          labels: ['ผัก', 'เนื้อสัตว์', 'ปลา', 'ปุ๋ย', 'ผลไม้', 'ไข่ไก่'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={300}
        yAxisLabel={''}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 140, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const GraphScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View>
                  <MyBarChart />
          </View>
          <View>
          <Text>เเนวโน้มการซื้อ</Text>
  <LineChart
    data={{
      labels: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GraphScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});