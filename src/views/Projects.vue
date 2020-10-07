<template>
  <div class="projects">
    <div class="col-2 row-2-sm full-height">
      <Branding></Branding>
      <ProjectsContent :projects="projects"></ProjectsContent>
    </div>
  </div>
</template>

<script>
import Branding from '../components/Branding.vue'
import ProjectsContent from '../components/ProjectsContent.vue'

export default {
  name: 'Projects',
  components: {
    Branding,
    ProjectsContent,
  },
  data: () =>({
    projects: [
      {"name": "Project 1", "desc": "Project 1 desc", "img": "https://images.squarespace-cdn.com/content/v1/542a394ce4b0a96a7d7be424/1412140365621-QXMSKWX4B2NNFUIMREZ3/ke17ZwdGBToddI8pDm48kKG6OoQUcDwE6Xrn0CktdYIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc7wdBxA2FfWIL_oInLxCuGYBExGLaY8v4Pn7yFeMELUKe4DQXRx1Bu1AnCO9mIfj2/3772025356_0f46ed69e3_b.jpg?format=2500w"},
      {"name": "Project 2", "desc": "Project 2 desc", "img": "logo.png"},
      {"name": "Project 3", "desc": "Project 3 desc", "img": "logo.png"},
    ]
  })
}
</script>