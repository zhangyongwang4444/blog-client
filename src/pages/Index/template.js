
import blog from '@/api/blog.js'


export default {
  data() {
    return {
      blogs: [

      ]
    };
  },
  created() {
    blog.getIndexBlogs().then(res => {
      console.log(res)
      this.blogs = res.data
    })
  },
  methods: {

  }
};