/**
 * Created by Ricardo Trujillo on 07/06/2014.
 */
var events = (function(){
  var topics = {}
      hOP = topics.hasOwnProperty;

  return {
    subscribe: function(topic, listener) {

      if(!topics.hasOwnProperty(topic)){
        topics[topic] = [];
      }

      var index = topics[topic].push(listener) -1;

      return {
        remove : function() {
          delete topics[topic][index];
        }
      };
    },

    publish: function(topic, info){

      if(!hOP.call(topics, topic)) return;

      topics[topic].forEach( function( listener ) {
        listener(info);
        listener(info != undefined ? info : {});
      })
    }
  }

}());

events.publish('topic1', 'info for topic1');
events.publish('topic2', 'info for topic2');
events.publish('topic2', 'another info for topic2 ');

var subscription1 = events.subscribe('topic1',function(data){
  console.log('Data received : ' + data );
});

subscription1.remove();
