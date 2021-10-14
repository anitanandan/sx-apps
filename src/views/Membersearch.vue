<template>
  <v-form  ref="form" v-model="valid" lazy-validation>
    <div class="pa-9">
       <v-divider></v-divider>
       <v-text-field  label="Subject"    value="Service Date"  single-line   full-width  hide-details ></v-text-field>
        <v-row>
        <v-col  cols="12"  lg="6" >
        <v-menu   v-model="menu1"   :close-on-content-click="false"    max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field   :value="computedDateFormattedMomentjs"    clearable   label="select date"   readonly   v-bind="attrs"  v-on="on" @click:clear="date = null"            ></v-text-field>
          </template>
          <v-date-picker  v-model="date"  @change="menu1 = false"  ></v-date-picker>
        </v-menu>
      </v-col>
       </v-row>
     <v-divider></v-divider>
    <v-text-field  label="Subject" value="Search Using" single-line  full-width hide-details ></v-text-field>
    <v-text-field  v-model="query.policy"  :rules="nameRules"  label="Policy Number"  required   outlined  ></v-text-field>
    <v-text-field v-model="query.cardnumber"  label="Member Card Number"   outlined ></v-text-field>
    <v-row align="center" justify="space-around" class=pa-9>
     <v-btn depressed color="primary"  @click="validate"> Search  </v-btn>
     <v-btn color="warning" dark @click="reset"> Reset </v-btn>
   </v-row>
    </div>
  </v-form>
</template>
<script>
  import moment from 'moment'
  import axios from "axios"
  import { format, parseISO } from 'date-fns'
  

  export default {
    data: () => ({
      date: format(parseISO(new Date().toISOString()), 'yyyy-MM-dd'),
      valid: true,
      policy: '',
      nameRules: [
        v => !!v || 'Policy Number is required',
        v => /^\d+$/.test(v)||'This field only accept numbers',
      ],
      menu1: false,
      menu2: false,
      errors: [],
      regex: /[0-9]/,
       query:{
               policy:null,
               cardnumber:null,
           },
    }),
   

    computed: {
      computedDateFormattedMomentjs () {
        return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
      },
      computedDateFormattedDatefns () {
       return this.date ? format(parseISO(this.date), 'EEEE, MMMM do yyyy') : ''
      },
    },
    
     methods:{
       reset () {
        this.$refs.form.reset()
      },
       validate () {
        if(this.$refs.form.validate())
        {
            let _this = this;
            _this.$router.push({name:'Searchresult', params: { policyno: this.query.policy,membercard:this.query.cardnumber }}); 
          
        }
        else{
          console.log('Not validation');
        }
      },

   },

   
  }
</script>
