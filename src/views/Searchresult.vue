<template>

  <div class="pa-9">
    <div v-if="memberdata.length == 0">
      <div> <v-alert type="error">
      No Data Found  !!
    </v-alert></div>
    </div>
    <div v-else>
       <div v-for="memberdata in memberdata" :key="memberdata.id" class="weather-data">
    <v-alert
      outlined
      color="purple"
    >
   <p>First Name: {{memberdata.firstName}}</p>
    <p>Last Name: {{memberdata.lastName}}</p>
    <!--<p>Card Number: {{memberdata.memberCardNumber}}</p>-->
    <p>Policy No: {{memberdata.policyNumber}}</p>
    <p>DOB: {{memberdata.dataOfBirth}}</p>
   
    </v-alert>
     </div>
     </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: "Searchresult",
  data: () => ({
    memberdata: {}
  }),
  mounted() {
    if (localStorage.getItem("memberdata"))
    {
    this.memberdata = JSON.parse(localStorage.getItem("memberdata"))
  }
  },
  watch: {
  books: {
    handler() {
      
    },
    deep: true
  }
  },
  methods: {
    searchdata(name,membercard) {
      cache: true,
        axios.get('https://newactivedir.azurewebsites.net/api/search?policyno='+name+'&membercard='+membercard)
        .then(response => {
          this.memberdata = response.data;
          localStorage.setItem('memberdata',JSON.stringify(this.memberdata))
          console.log(this.memberdata);
        })
        .catch((error)=>{
                console.log(error);
            })
    }
  },
  created() {
       if(this.$route.params.policyno != null)
    this.searchdata(this.$route.params.policyno,this.$route.params.membercard);
     
  }
};
</script>