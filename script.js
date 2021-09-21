var app = new Vue ({
    el:"#app",

    data: {

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ], // end contact

        selectedContact : 0,  
        
        fieldSent : "",

        fieldSearch : "",

    
    }, //end data

    methods:{

        getImg : function(index) {
          return "img/avatar"+ this.contacts[index].avatar +".jpg";
        }, 
        
        selectContact : function (elementIndex) {
            this.selectedContact = elementIndex;
        },
        sendMessage : function (selectedItemIndex) {
            if (this.fieldSent.trim("").length > 0) {
                let newMessages = {
                    date: new Date().toLocaleString(),
                    text: this.fieldSent,
                    status: "sent",

                };
                this.contacts[selectedItemIndex].messages.push(newMessages);
                this.fieldSent = "";  
                          
                
                this.autoReply(selectedItemIndex);
            }
        },

        autoReply : function (selectedItemIndex) {

            let currentContact = this.contacts[selectedItemIndex];

            setTimeout( function() {
                let newMessages = {
                    date: new Date().toLocaleString(),
                    text: "ok",
                    status: "received",
                };
                currentContact.messages.push(newMessages);
            }, 1000);                  
        },

        searchContact : function () {
            
            for (let i = 0; i < this.contacts.length; i++) {
                if ((this.contacts[i].name).toLowerCase().startsWith(this.fieldSearch.toLowerCase())) {
                    this.contacts[i].visible = true;
                   
                } else {
                    this.contacts[i].visible = false;                  
                }     
            }

        }
     

            
    }       
}) // end VUE

