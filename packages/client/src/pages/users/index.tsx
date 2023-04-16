import React from 'react'
import Layout from '../../components/layout'
import { toSentenceCase } from '../../utils'
import Table from '../../components/table'

type Props = {}

const data =[
  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },  {
    "user_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "address": "123 Main St.",
    "phone_number": "555-123-4567"
  },
  {
    "user_id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "address": "456 Elm St.",
    "phone_number": "555-987-6543"
  },
  {
    "user_id": 3,
    "first_name": "Bob",
    "last_name": "Johnson",
    "email": "bob.johnson@example.com",
    "address": "789 Maple Ave.",
    "phone_number": "555-555-1212"
  },
]




const Users = (props: Props) => {
  return (
      <>
      <div>Users</div>
      <Table
        // headers={headers}
        data={data}
      />
      </>

  )
}

export default Users
