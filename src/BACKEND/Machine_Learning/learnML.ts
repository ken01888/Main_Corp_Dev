import * as tf from '@tensorflow/tfjs-node';
import * as express from 'express'



const shape = [4,2]
const data = tf.tensor([[4,6],[5,9],[4,6,9],[5,9]])


// const data2 = tf.variable(tf.zeros([8]))

data.print()
// data2.print()




