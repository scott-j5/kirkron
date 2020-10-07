<template>
  <div class="about">
    <div class="col-2 row-2-sm full-height">
      <Branding></Branding>
      <ProjectsContent></ProjectsContent>
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
  }
}
</script>