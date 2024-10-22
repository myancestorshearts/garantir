import React from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"

const PrivacyPolicy = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>Privacy Policy</Text>

        <Text style={styles.paragraph}>
          This Privacy Policy outlines how we collect, use, disclose, and
          protect your personal information when you use our services. We are
          committed to ensuring your privacy and safeguarding your personal
          information.
        </Text>

        <Text style={styles.sectionTitle}>Information Collection</Text>
        <Text style={styles.paragraph}>
          We collect personal information when you use our services, including:
          {"\n"}- Name{"\n"}- Email Address{"\n"}- Payment Information{"\n"}-
          Usage Data{"\n"}- Location Data (with your consent)
        </Text>

        <Text style={styles.sectionTitle}>Use of Information</Text>
        <Text style={styles.paragraph}>
          The information we collect is used to provide and improve our
          services, including: {"\n"}- To manage your account {"\n"}- To
          personalize your experience {"\n"}- To process payments{"\n"}- To
          comply with legal obligations
        </Text>

        <Text style={styles.sectionTitle}>Information Sharing</Text>
        <Text style={styles.paragraph}>
          We do not sell or rent your personal information to third parties. We
          may share information only to comply with legal obligations or to
          protect our rights and safety.
        </Text>

        <Text style={styles.sectionTitle}>Data Security</Text>
        <Text style={styles.paragraph}>
          We implement technical and organizational measures to protect your
          data, including secure storage, encryption, and access control.
        </Text>

        <Text style={styles.sectionTitle}>Your Rights</Text>
        <Text style={styles.paragraph}>
          You have the right to access, correct, or delete your personal
          information. You can also object to the processing of your data in
          certain circumstances.
        </Text>

        <Text style={styles.sectionTitle}>Changes to This Policy</Text>
        <Text style={styles.paragraph}>
          We may update this policy from time to time. Please review this page
          periodically for updates. Your continued use of the services after any
          changes will constitute your acceptance of the new policy.
        </Text>

        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions or concerns about this Privacy Policy, you
          can contact us at: support@homemaster.com
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
})

export default PrivacyPolicy
