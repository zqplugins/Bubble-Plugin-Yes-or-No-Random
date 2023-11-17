function(instance, properties, context) {
const random = Math.random() < properties.possibilities;
instance.publishState("yes", random);
instance.triggerEvent(random ? "randomize_yes" : "randomize_no") 


}