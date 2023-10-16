#!/usr/bin/python3
def update_dictionary(a_dictionary, key, value):
    a_dictionary[key] = value
my_dictionary = {'a': 1, 'b': 2}
update_dictionary(my_dictionary, 'c', 3)
update_dictionary(my_dictionary, 'a', 5)
