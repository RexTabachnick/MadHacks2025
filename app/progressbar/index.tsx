import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { styles } from "../stylesheet";

const ProgressBar = ({ progress }) => (
    <View style={localStyles.progressContainer}>
      <View
        style={[
          localStyles.progressFill,
          { width: `${Math.min(progress, 1) * 100}%` },
        ]}
      />
    </View>
  );

const ProgressBarScreen = () => {
    const [goal, setGoal] = useState("");
    const [used, setUsed] = useState(0);

    const numericGoal = Number(goal) || 0;
    const progress = numericGoal ? used / numericGoal : 0;


    return (<View style={styles.base}>

        <View style={[styles.base, { padding: 20 }]}>
      <Text style={localStyles.title}>Progress Bar</Text>

      <Text style={localStyles.label}>Goal (number of coupons)</Text>
      <TextInput
        style={localStyles.input}
        placeholder="Enter goal"
        keyboardType="numeric"
        value={goal}
        onChangeText={setGoal}
      />

      <Text style={localStyles.label}>Coupons Used: {used}</Text>
      <Button
        title="Use One Coupon"
        onPress={() => setUsed((prev) => prev + 1)}
        disabled={!numericGoal}
        color='#3C5233'
      />

      <View style={{ marginVertical: 30 }}>
        <ProgressBar progress={progress} />
      </View>

      <Text style={localStyles.progressText}>
        {used} / {numericGoal}
      </Text>
    </View>
    </View>
    )
};

export default ProgressBarScreen;


const localStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "600",
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "white",
  },
  progressContainer: {
    width: "100%",
    height: 20,
    backgroundColor: "#ddd",
    borderRadius: 12,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4ade80", // green bar
  },
  progressText: {
    fontSize: 18,
    textAlign: "center",
  },
});
