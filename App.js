import React,{ useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, FlatList } from 'react-native';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Categories from './components/Categories';
import TaskItem from './components/TaskItem';


export default function App() {
  
  const [tasks, setTasks] = useState([
    {text: 'task1', key: '1'},
    {text: 'task2', key: '2'}

  ]);

  //Delete task
  const deleteHandler = (key) => {
    setTasks((deletedTasks) => {
      return deletedTasks.filter(tasks => tasks.key != key);
    });
  } 

//Add task
const addHandler = (text) => {
  setTasks((deletedTasks) => {
    return [
      {text: text, key: Math.random().toString()},
      ...deletedTasks
    ]
  })
}


  return (
      <>
        <StatusBar barStyle='light-content' />
        <SafeAreaView style={{flex:0, backgroundColor: '#0081a7'}}/>
        <SafeAreaView style={{flex:1, backgroundColor: '#fafafa'}}>

          {/*Header component */}
          <Header name={'Page Name'} />
          
          {/*Content in the screen*/}
          <View style={styles.screenContent}>

            {/*Submit Section*/}
            <AddTask addHandler={addHandler}/>
          
            {/*Categories Carousel */}
            <Categories />

            <FlatList
              data={tasks}
              renderItem={({item}) => (
                <TaskItem item={item} deleteHandler={deleteHandler} />
              )}
            />
          </View>
        </SafeAreaView>
      </>
  );
}


const styles = StyleSheet.create({
  
  screenContent: {
    flex: 1,
    backgroundColor: '#fafafa',
  }
})