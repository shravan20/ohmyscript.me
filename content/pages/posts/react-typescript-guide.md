---
title: "React with TypeScript: A Complete Guide"
date: "2024-01-05"
excerpt: "Learn how to build robust React applications with TypeScript for better code quality and developer experience."
thumb_img_path: "images/6.jpg"
thumb_img_alt: "React TypeScript development"
content_img_path: "images/6.jpg"
content_img_alt: "React TypeScript development"
layout: post
---

TypeScript has become an essential tool for building scalable React applications. In this comprehensive guide, we'll explore how to leverage TypeScript's power to create more reliable and maintainable React applications.

## Why TypeScript with React?

TypeScript brings several advantages to React development:

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better IntelliSense**: Enhanced auto-completion and IDE support
- **Refactoring Confidence**: Safely refactor code with compiler assistance
- **Self-Documenting Code**: Types serve as documentation
- **Team Collaboration**: Clearer interfaces and contracts between components

## Setting Up React with TypeScript

### Create React App with TypeScript

```bash
npx create-react-app my-app --template typescript
```

### Adding TypeScript to Existing Project

```bash
npm install --save typescript @types/node @types/react @types/react-dom
```

## Basic Component Types

### Functional Components

```typescript
import React from 'react';

interface Props {
  name: string;
  age: number;
  isActive?: boolean; // Optional prop
}

const UserProfile: React.FC<Props> = ({ name, age, isActive = false }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

export default UserProfile;
```

### Class Components

```typescript
import React, { Component } from 'react';

interface Props {
  initialCount: number;
}

interface State {
  count: number;
}

class Counter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: props.initialCount
    };
  }

  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

## Hooks with TypeScript

### useState Hook

```typescript
import React, { useState } from 'react';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTodo = (): void => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
```

### useEffect Hook

```typescript
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        const response = await fetch('/api/users');
        const userData: User[] = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};
```

### Custom Hooks

```typescript
import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: T = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ 
          data: null, 
          loading: false, 
          error: error instanceof Error ? error.message : 'Unknown error' 
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
}
```

## Event Handling

```typescript
import React, { useState } from 'react';

const FormExample: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log('Button clicked');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleButtonClick}>
        Click Me
      </button>
    </form>
  );
};
```

## Advanced Patterns

### Generic Components

```typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>): JSX.Element {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage
const numbers = [1, 2, 3, 4, 5];
const users = [{ name: 'John' }, { name: 'Jane' }];

<List items={numbers} renderItem={(num) => <span>{num}</span>} />
<List items={users} renderItem={(user) => <span>{user.name}</span>} />
```

### Context with TypeScript

```typescript
import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User): void => {
    setUser(user);
  };

  const logout = (): void => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

## Best Practices

### 1. Use Strict Types

Avoid `any` type and prefer specific interfaces and unions.

```typescript
// Bad
const handleClick = (data: any) => {
  // ...
};

// Good
interface ClickData {
  id: string;
  action: 'edit' | 'delete' | 'view';
}

const handleClick = (data: ClickData) => {
  // ...
};
```

### 2. Use Type Guards

```typescript
interface Dog {
  type: 'dog';
  breed: string;
}

interface Cat {
  type: 'cat';
  indoor: boolean;
}

type Pet = Dog | Cat;

const isDog = (pet: Pet): pet is Dog => {
  return pet.type === 'dog';
};

const PetInfo: React.FC<{ pet: Pet }> = ({ pet }) => {
  if (isDog(pet)) {
    return <div>Breed: {pet.breed}</div>;
  }
  return <div>Indoor: {pet.indoor ? 'Yes' : 'No'}</div>;
};
```

### 3. Prop Validation

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  disabled = false,
  onClick,
  children
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

## Common Pitfalls and Solutions

### 1. Object.keys() Type Issue

```typescript
// Problem: Object.keys() returns string[]
const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj).forEach(key => {
  console.log(obj[key]); // TypeScript error
});

// Solution: Type assertion or helper function
(Object.keys(obj) as (keyof typeof obj)[]).forEach(key => {
  console.log(obj[key]); // Works!
});
```

### 2. Ref Typing

```typescript
import React, { useRef, useEffect } from 'react';

const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return <input ref={inputRef} type="text" />;
};
```

## Conclusion

TypeScript significantly enhances the React development experience by providing type safety, better tooling, and improved code maintainability. While there's a learning curve, the benefits far outweigh the initial investment.

Start by adding TypeScript to a small React project and gradually incorporate more advanced patterns as you become comfortable with the syntax and concepts.

The combination of React and TypeScript is powerful for building scalable, maintainable applications that can grow with your team and requirements.
