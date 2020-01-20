<template>
  <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Users</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row class="caca">
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.firstName" label="First Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.lastName" label="Last Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.Avatar" label="Avatar"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
      <v-icon small @click="deleteItem(item)">delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "First Name",
        align: "left",
        sortable: false,
        value: "firstName"
      },
      { text: "Last Name", value: "lastName" },
      { text: "Email", value: "email" },
      { text: "Avatar", value: "Avatar" },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
        firstName: "",
        lastName: "",
        email: "",
        Avatar: "",
    },
    defaultItem: {
        firstName: "",
        lastName: "",
        email: "",
        Avatar: "",
    }
}),

computed: {
    formTitle() {
    return this.editedIndex === -1 ? "New User" : "Edit User";
    }
},

watch: {
    dialog(val) {
    val || this.close();
    }
},

created() {
    this.initialize();
},

methods: {
    initialize() {
      
    this.desserts = [
        {
            firstName: "martin",
            lastName:"" ,
            email:"" ,
            Avatar:"" ,
        },
        {
            firstName: "Nicolas",
            lastName: "Guzman",
            email: "maddwq@gmail.com",
            Avatar: "dwq.net",
        },
        {
            firstName: "dwq",
            lastName: "dwqdwq",
            email: "dwqdwqdwq@gmail.com",
            Avatar: "fwqwqe.net",
        },
    ];
    },

    editItem(item) {
        this.editedIndex = this.desserts.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
    },

    deleteItem(item) {
        const index = this.desserts.indexOf(item);
        confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
    this.dialog = false;
    setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
    }, 300);
    },

    save() {
    if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
    } else {
        this.desserts.push(this.editedItem);
    }
    this.close();
    }
}
};
</script>

<style lang="less" scoped>




</style>

