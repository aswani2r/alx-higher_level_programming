#include <Python.h>

// Function to print info about Python lists
void print_python_list(PyObject *p) {
    // Check if the object is a list
    if (PyList_Check(p)) {
        Py_ssize_t size = PyList_Size(p);
        Py_ssize_t i;

        printf("[*] Python list info\n");
        printf("[*] Size of the Python List = %ld\n", size);
        printf("[*] Allocated = %ld\n", ((PyListObject *)p)->allocated);

        for (i = 0; i < size; i++) {
            PyObject *item = PyList_GetItem(p, i);
            printf("Element %ld: %s\n", i, Py_TYPE(item)->tp_name);
        }
    } else {
        printf("  [ERROR] Invalid List Object\n");
    }
}

// Function to print info about Python bytes objects
void print_python_bytes(PyObject *p) {
    // Check if the object is bytes
    if (PyBytes_Check(p)) {
        Py_ssize_t size = PyBytes_GET_SIZE(p);
        char *data = PyBytes_AsString(p);

        printf("[.] bytes object info\n");
        printf("  size: %ld\n", size);
        printf("  trying string: %s\n", data);
        printf("  first %ld bytes: ", (size > 10) ? 10 : size);

        for (Py_ssize_t i = 0; i < size && i < 10; i++) {
            printf("%02hhx", data[i]);
            if (i < 9) printf(" ");
        }
        printf("\n");
    } else {
        printf("  [ERROR] Invalid Bytes Object\n");
    }
}

