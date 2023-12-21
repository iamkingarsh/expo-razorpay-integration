import { Text, View } from 'react-native';
import {
  SplashScreen,
  // This example uses a basic Layout component, but you can use any Layout.
  Stack,
} from 'expo-router';
import { useFonts, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { useEffect } from 'react';
import {COLORS} from '../constants/theme'


SplashScreen.preventAutoHideAsync();


export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_500Medium, Inter_700Bold
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Render the children routes now that all the assets are loaded.
  return <Stack
    screenOptions={{
       
        headerLargeTitle: true,
        headerLargeTitleStyle: {
            fontFamily: 'Inter_700Bold',
            fontSize: 30,
            },
        headerLargeStyle: {
            backgroundColor: COLORS.primary,
            
            
        },
        headerTitleStyle: {
            fontFamily: 'Inter_500Medium',
            color: COLORS.white,
        },
        headerStyle: {
            backgroundColor: 'transparent',

        },
        headerBlurEffect: 'material',
        headerTransparent: true,
        
        }}
  />;
}
