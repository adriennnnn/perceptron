
<?php
  class Perceptron {
    public function __construct($numFeatures) {
      $this->weights = array_fill(0, $numFeatures, 0);
      $this->bias = 0;
    }

    public function predict($inputs) {
      $sum = $this->bias;
      for ($i = 0; $i < count($this->weights); $i++) {
        $sum += $this->weights[$i] * $inputs[$i];
      }
      return $this->step($sum);
    }

    public function train($inputs, $label) {
      $prediction = $this->predict($inputs);
      $error = $label - $prediction;
      $this->bias += $error;
      for ($i = 0; $i < count($this->weights); $i++) {
        $this->weights[$i] += $error * $inputs[$i];
      }
    }

    public function step($x) {
      return $x > 0 ? 1 : 0;
    }
  }

  $p = new Perceptron(2);
  $p->train([1, 1], 1);
  $p->train([1, 0], 1);
  $p->train([0, 1], 1);
  $p->train([0, 0], 0);
  echo $p->predict([1, 1]) .
  
?>