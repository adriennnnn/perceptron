class Perceptron {
    constructor(numFeatures) {
      this.weights = new Array(numFeatures).fill(0);
      this.bias = 0;
    }
  
    predict(inputs) {
      let sum = this.bias;
      for (let i = 0; i < this.weights.length; i++) {
        sum += this.weights[i] * inputs[i];
      }
      return this.step(sum);
    }
  
    train(inputs, label) {
      const prediction = this.predict(inputs);
      const error = label - prediction;
      this.bias += error;
      for (let i = 0; i < this.weights.length; i++) {
        this.weights[i] += error * inputs[i];
      }
    }
  
    step(x) {
      return x > 0 ? 1 : 0;
    }
  }
  
  const p = new Perceptron(2);
  p.train([1, 1], 1);
  p.train([1, 0], 1);
  p.train([0, 1], 1);
  p.train([0, 0], 0);
  console.log(p.predict([1, 1])); // 1
  console.log(p.predict([1, 0])); // 1
  console.log(p.predict([0, 1])); // 1
  console.log(p.predict([0, 0])); // 0
  