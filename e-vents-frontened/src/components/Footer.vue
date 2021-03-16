<!-- src/components/Footer.vue -->
<template>
  <v-footer padless>
    <v-card flat tile class="orange lighten-1 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-2 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
       SooperChef is Pakistan’s largest digital food network. Our Recipes are loved 
       by millions. Our aim is to get people to fall in love with the cooking! 
       SooperChef is Pakistan’s largest digital food network. Our Recipes are loved 
       by millions. Our aim is to get people to fall in love with the cooking! 
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Mealsers</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [],
  }),
};
</script>