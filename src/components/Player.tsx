import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Player = () => {
    const [name, setName] = useState<string | undefined>()

    return(
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder='Your name here'
            />
        </View>
    )
}

export default Player

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });