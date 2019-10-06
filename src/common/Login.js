import React, { useState, useEffect } from 'react'
import * as Icon from '@expo/vector-icons'
import styled from '@emotion/native'
import { withTheme } from 'emotion-theming'
import * as AppleAuthentication from 'expo-apple-authentication'

import Link from '~common/Link'
import TextInput from '~common/ui/TextInput'
import Button from '~common/ui/Button'
import Box from '~common/ui/Box'
import Spacer from '~common/ui/Spacer'
import Text from '~common/ui/Text'
import FireAuth from '~helpers/FireAuth'

const SocialButton = styled.TouchableOpacity(({ theme, color }) => ({
  flexDirection: 'row',
  borderRadius: 48,
  height: 48,
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 10,
  paddingRight: 10,
  backgroundColor: color || theme.colors.reverse,
  flex: 1
}))

const ButtonIcon = styled(Icon.FontAwesome)(() => ({
  marginRight: 15
}))

const ButtonText = styled(Text)(({ theme, color }) => ({
  fontSize: 16,
  color: color || theme.colors.defaut
}))

const Login = ({ theme }) => {
  const [isLoading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [canDisplayAppleButton, setCanDisplayAppleButton] = useState(false)

  const onGoogleLogin = async () => {
    setLoading(true)
    const isStillLoading = await FireAuth.googleLogin()
    setLoading(isStillLoading)
  }

  const onFacebookLogin = async () => {
    setLoading(true)
    const isStillLoading = await FireAuth.facebookLogin()
    setLoading(isStillLoading)
  }

  const onLogin = async () => {
    setLoading(true)
    const isStillLoading = await FireAuth.login(email, password)
    setLoading(isStillLoading)
  }

  const onAppleLogin = async () => {
    setLoading(true)
    const isStillLoading = await FireAuth.appleLogin()
    setLoading(isStillLoading)
  }

  useEffect(() => {
    const waitForApple = async () => {
      const canDisplay = await AppleAuthentication.isAvailableAsync()
      setCanDisplayAppleButton(canDisplay)
    }
    waitForApple()
  }, [])

  return (
    <Box>
      <Box>
        <TextInput
          placeholder="Email"
          leftIcon={<Icon.Feather name="mail" size={20} color={theme.colors.darkGrey} />}
          onChangeText={setEmail}
        />
        <Spacer />
        <TextInput
          placeholder="Mot de passe"
          leftIcon={<Icon.Feather name="lock" size={20} color={theme.colors.darkGrey} />}
          secureTextEntry
          onChangeText={setPassword}
        />
        <Spacer size={2} />
        <Button title="Connexion" isLoading={isLoading} onPress={onLogin} />
      </Box>
      <Spacer />
      <Box center>
        <Text titleItalic fontSize={16}>
          - ou -
        </Text>
      </Box>
      <Spacer />
      <Box row>
        <SocialButton disabled={isLoading} onPress={onGoogleLogin} color="#D14C3E">
          <ButtonIcon size={20} name="google" color="white" />
          <ButtonText color="white">Google</ButtonText>
        </SocialButton>
        <Box width={10} />
        <SocialButton disabled={isLoading} onPress={onFacebookLogin} color="#3b5998">
          <ButtonIcon size={20} name="facebook" color="white" />
          <ButtonText color="white">Facebook</ButtonText>
        </SocialButton>
      </Box>
      {canDisplayAppleButton && (
        <AppleAuthentication.AppleAuthenticationButton
          style={{ flex: 1, height: 44, marginTop: 10 }}
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={5}
          onPress={onAppleLogin}
        />
      )}
      <Spacer size={2} />
      <Box center>
        <Link route="Register">
          <Text underline>Pas de compte ? Inscrivez-vous.</Text>
        </Link>
      </Box>
    </Box>
  )
}

export default withTheme(Login)
