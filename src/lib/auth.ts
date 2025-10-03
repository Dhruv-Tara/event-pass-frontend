
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

export class AuthAPI {
  private static baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  static async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || 'Login failed',
        };
      }


      if (data.token) {
        localStorage.setItem('authToken', data.token);
      }

      return {
        success: true,
        message: 'Login successful',
        token: data.token,
        user: data.user,
      };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        message: 'Network error. Please try again.',
      };
    }
  }

  static async logout(): Promise<void> {
    try {

      localStorage.removeItem('authToken');
      

      const token = localStorage.getItem('authToken');
      if (token) {
        await fetch(`${this.baseUrl}/api/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  static getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  static isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }

  static async validateToken(): Promise<boolean> {
    const token = this.getAuthToken();
    if (!token) return false;

    try {
      const response = await fetch(`${this.baseUrl}/api/auth/validate`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      return response.ok;
    } catch (error) {
      console.error('Token validation error:', error);
      return false;
    }
  }
}

export default AuthAPI;