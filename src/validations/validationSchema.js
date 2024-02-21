import * as Yup from "yup";

//The data which is entered in form field is validated with help of validation schema
const validationSchema = Yup.object({
  groupName: Yup.string()
    .min(2, "Group name must be of atleast 2 characters")
    .max(50, "Group name must be between 3-50 characters")
    .required("Required!"),
  groupDescription: Yup.string()
    .min(10, "Group Description should be minimum 10 characters")
    .max(350, "Group Description cannot be more than 350 characters")
    .required("Required!"),

  term: Yup.array(
    Yup.object({
      termName: Yup.string()
        .min(3, "Term name must be of 3 characters")
        .max(15, "Term name must be between 3-15 characters")
        .required("Required!"),
      termDefinition: Yup.string()
        .min(10, "Term Definition must be atleast 10 Characters")
        .max(
          600,
          "Term definition/ description cannot be more that 600 characters"
        )
        .required("Required!"),
    })
  ),
});

export default validationSchema;
